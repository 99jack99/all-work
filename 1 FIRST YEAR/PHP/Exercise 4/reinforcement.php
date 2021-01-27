<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
        <?php

   // 1
$x = 0;

while($x < 4){
    echo "*"."<br>";
    $x++;
}

echo"<hr>";


//  2
for ($i=0; $i < 4 ; $i++) { 
    for ($u=0; $u < 4; $u++) { 
        echo "*";
    }
    echo"<br>";
}

echo"<hr>";

//  3
$ast = "";

for ($t=0; $t < 6; $t++) { 
    $as.="*";
    echo $as;
    echo"<br>";
}
echo"<hr>";

// 4
$as2 = "*";
$as3 = "*";
$as4 = "**";

for ($s=0; $s < 1; $s++) {
    echo $as2."<br>";
    for ($q=0; $q < 2 ; $q++) { 
        $as3.=$as4;
        echo$piloto3;
        echo"<br>";
    }
    for ($f=0; $f < 1; $f++) { 
        $as4.=$as2;
        echo $as4."<br>";
        echo $as2;

    }
}

echo"<hr>";


// 5
$espacio = "&nbsp";
$aste = "*";

for ($z=0; $z < 9; $z = $z + 2) { 
    for ($c=0; $c < 9 - $z - 1; $c++) { 
       echo $espacio;
    }
    for ($c=0; $c <= $z; $c++) { 
        echo $aste;
    }
    echo"<br>";
}


  


        ?>

      
    



</body>
</html>
