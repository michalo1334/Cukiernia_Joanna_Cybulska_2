   $(".burger").on("click", function () {
    $(".fas, nav").toggleClass("off");
   })


    let wybor=0;

    $(".tort").click(function(){
        $(".tort1").show();
        $(".ciasta1").hide();
        $(".makaroniki1").hide();
        $(".lody1").hide();
        $(".paczki1").hide();
        $(".mufinka1").hide();
        return wybor= 1;
    });

    $(".ciasta").click(function(){
        $(".ciasta1").show();
        $(".tort1").hide();
        $(".makaroniki1").hide();
        $(".lody1").hide();
        $(".paczki1").hide();
        $(".mufinka1").hide();
        return wybor= 2;
    });

    $(".makaroniki").click(function(){
        $(".makaroniki1").show();
        $(".ciasta1").hide();
        $(".tort1").hide();
        $(".lody1").hide();
        $(".paczki1").hide();
        $(".mufinka1").hide();
        return wybor= 3;
     });

    $(".lody").click(function(){
        $(".lody1").show();
        $(".ciasta1").hide();
        $(".tort1").hide();
        $(".makaroniki1").hide();
        $(".paczki1").hide();
        $(".mufinka1").hide();
        return wybor= 4;
    });


    $(".mufinka").click(function(){
        $(".mufinka1").show();
        $(".ciasta1").hide();
        $(".tort1").hide();
        $(".lody1").hide();
        $(".paczki1").hide();
        $(".makaroniki1").hide();

        return wybor= 5;
    });

    $(".paczki").click(function(){
        $(".paczki1").show();
        $(".ciasta1").hide();
        $(".tort1").hide();
        $(".makaroniki1").hide();
        $(".lody1").hide();
        $(".mufinka1").hide();
        return wybor= 6;
    });


      

    switch (wybor) {
        case 1:
          $(".tort2").show();
          wybor=0;
          break;

        case 2:
          $(".ciasta2").show(); 
          wybor=0;
          break;

        case 3:
          $(".makaroniki2").show(); 
          wybor=0;
          break;

        case 4:
          $(".lody2").show(); 
          wybor=0;
          break;

        case 5:
          $(".mufinka2").show(); 
          wybor=0;
          break;
          
        case 6:
          $(".paczki2").show(); 
          wybor=0;
          break;

        
      }
    
 