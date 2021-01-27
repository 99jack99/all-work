var toggle = false;
var deletepopup = false;
var inputs = $('.writable');

function editToggle()
{
    if(!toggle)
    {   
        toggle = true;  
        for (let i = 0; i < inputs.length; i++) 
        {
            $(inputs[i]).prop('readonly', false);      
        }

        $('#edit-butt').prop('type', 'submit');
        $('#edit-butt').prop('value', 'Confirm changes');
        $('#edit-butt').css('right','7%');
    }

    else
    {
        toggle = false;

        for (let i = 0; i < inputs.length; i++) 
        {
            $(inputs[i]).prop('readonly', true);      
        }
    }    
}


function deleteAcc(id)
{
    if(!deletepopup)
    {
        deletepopup = true;
        $('#modal-user').css('display','block');
        $('#popup-user').css('display','block');
        setTimeout(() => {
            $('#modal-user').css('opacity','1');
            $('#popup-user').css('opacity','1');  
        }, 200);
    }
    else
    {
        deletepopup = false;
        setTimeout(() => {
            $('#modal-user').css('display','none');
            $('#popup-user').css('display','none');
        }, 600);
        
        $('#modal-user').css('opacity','0');
        $('#popup-user').css('opacity','0');
    }
    
    
}