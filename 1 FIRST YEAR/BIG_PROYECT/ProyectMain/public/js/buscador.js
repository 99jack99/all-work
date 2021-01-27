var likepopup =  false;
var petlist;
var favsnow = new Array();



$(document).ready(function () {
    $.ajax({
        url:"APIBuscador/listapets",
        type:"POST",
        success: function (data) {
            petlist = $.parseJSON(data)[0];
            favsnowaux = $.parseJSON(data)[1];
            favsnowaux.forEach(element => {
                favsnow.push(element.id)
            });

            nextPet();
            loadFavs()            
        }

        })
})


function confirmLike(id)
{
    if(!likepopup)
    {
        likepopup = true;
        $('#confirm-popup-like').attr("onclick",`doubleConfirm(${id})`);
        $('#modal-like').css('display','block');
        $('#popup-like').css('display','block');
        $('#modal-like').css('opacity','1');
        $('#popup-like').css('opacity','1');
        

    }
    else
    {
        likepopup = false;
        setTimeout(() => {
            $('#modal-like').css('display','none');
            $('#popup-like').css('display','none');
        }, 600);
        
        $('#modal-like').css('opacity','0');
        $('#popup-like').css('opacity','0');
    }
    
    
}

function doubleConfirm(id)
{
    $.ajax({
        url:"APIBuscador/confirm",
        type:"POST",
        data:{confirmid:id},
        success: function (data) 
        {
            confirmLike();
            nextPet();
        }

    })

}

function addFav(id)
{
    $.ajax({
        url:"APIBuscador/addfav",
        type:"POST",
        data:{favid:id},
        success: function (data) 
        {
            
            if(data)
            {
                favsnow.push(id);
                $('#fav').addClass('active-fav')
                loadFavs();
            } 
            else
                console.log(data);
        }

    })
}

function addFavText(id)
{
    addFav(id);
    confirmLike();
}

function elimfav(id)
{
    $.ajax({
        url:"APIBuscador/removefav",
        type:"POST",
        data:{petid :id},
        success: function (data) 
        {
            if(favsnow.length > 0)

            var keys = favsnow.keys();
            for (i of keys )
            {
                if ( favsnow[i] == id) 
                {
                    favsnow.splice(i, 1); 
                }
            }
            
            $('#fav-'+id).css('opacity','0');

            setTimeout(() => {
                $('#fav-'+id).css('display','none');
                if(favsnow.length == 0)
                {
                $('#fav-inner').html("<span id='fav-message'>There are no faved pets. Go on, have a look!</span>");
                }
            }, 550);

            $('#fav').removeClass('active-fav')
            
            
            
        
        }
        
    })
}

function favoritodel(elemento,id) {
    return elemento != id;
  }

function loadFavs()
{
    $.ajax({
        url:"APIBuscador/listafavs",
        type:"POST",
        success: function (data) 
        {
            
            var listfav = $.parseJSON(data);
            var htmlstring = '';

            if(listfav.length == 0)
            {
                htmlstring = "<span id='fav-message'>There are no faved pets. Go on, have a look!</span>";
            }
            else
            {
                listfav.forEach(element => {

                    if(element.id == 0)
                    {
                        htmlstring = `<span id='fav-message'>${element.name}</span>`
                    }
                    else
                    htmlstring +=
    
                        `<div class="fav-item" id="fav-${element.id}"><figure class="fav-fig"><img class="fav-img" src="../../petmeup/public/img/pets/${element.id}.jpg"></figure><a href="javascript:seePet(${element.id})"><span class="fav-nombre">${element.name}</span></a><i class="fas fa-times elim-fav" onclick="elimfav(${element.id})"></i></div>`;
                });
            }            
            $('#fav-inner').html(htmlstring)

        }

    })
}

function nextPet()
{

    var pet = petlist.pop(); 
    var shelter;

    petid = pet.id;


    $.ajax({
        url:"APIBuscador/getshelter",
        type:"POST",
        data:{petid: petid},
        success: function (data) 
        {
        
        $('#fav').removeClass('active-fav')
        shelter = $.parseJSON(data);
        $('#info-nombre').html(pet.name+", ");
        $('#info-edad').html(pet.age);
        $('#info-location').html(shelter.location);
        $('#info-peso').html(pet.weight+"kg");
        $('#info-desc').html(pet.description);
        $('#info-protectora').html(shelter.name);
        $('#imagen-img').attr('src',`../../petmeup/public/img/pets/${pet['id']}.jpg`);
        $('#like').attr("onclick",`confirmLike(${pet.id})`);
        if(favsnow.includes(petid))
        {
            $('#fav').addClass('active-fav')
        }
        $('#fav').attr("onclick",`addFav(${pet.id})`);
        $('#like-popup-fav').attr("onclick",`addFavText(${pet.id})`);
        }

    })  
    

}

function seePet(petid)
{

    $.ajax({
        url:"APIBuscador/seepet",
        type:"POST",
        data:{petid: petid},
        success: function (data) 
        {
            $('#fav').removeClass('active-fav')
            var datos = $.parseJSON(data);
            $('#info-nombre').html(datos.name+", ");
            $('#info-edad').html(datos.age);
            $('#info-location').html(datos.location);
            $('#info-peso').html(datos.weight+"kg");
            $('#info-desc').html(datos.description);
            $('#info-protectora').html(datos.sname);
            $('#imagen-img').attr('src',`../../petmeup/public/img/pets/${datos.id}.jpg`);
            $('#like').attr("onclick",`confirmLike(${datos.id})`);
            $('#fav').attr("onclick",`addFav(${datos.id})`);
            if(favsnow.includes(petid))
            {
            $('#fav').addClass('active-fav')
            }
            $('#like-popup-fav').attr("onclick",`addFav(${datos.id})`);
        }
    });

}



