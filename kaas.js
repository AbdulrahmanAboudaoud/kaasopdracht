var kaaskleur = prompt("is de kaas geel ?")
kaaskleur = kaaskleur.toLowerCase();

if (kaaskleur == "ja"){

        var gaten = prompt("zitten er gaten in ?")
        gaten = gaten.toLowerCase();
        
        if (gaten == "ja") {
            var belachelijkduur = prompt("is de kaas belachelijk duur?") 
            belachelijkduur = belachelijkduur.toLowerCase();
        }

        if (belachelijkduur == "ja" ) {
        	  alert("De kaas is Emmenthaler")
        }

        else if (belachelijkduur == "nee") {
        	  alert("De kaas is Leerdammer")
        }
        
        if (gaten == "nee") {
            var hard = prompt("is de kaas hard als steen?")
            hard = hard.toLowerCase();
        }

        if (hard == "ja") {
            alert("De kaas is Pamigiano Reggiano")
        }

        else if (hard == "nee"){
        	  alert("De kaas is Goudse kaas")
        }
        
        }




else if (kaaskleur == "nee") {
	
        var blauweschimmels = prompt("heeft de kaas blauweschimmels?")
        blauweschimmels = blauweschimmels.toLowerCase();
        }

        if (blauweschimmels == "nee"){
            var korst = prompt("heeft de kaas een korst?")
            korst = korst.toLowerCase();
        }

        if (korst == "ja"){
          	alert("De kaas is Camembert")
        }

        else if (korst == "nee"){
          	alert("De kaas is Mozzarella")
        }

        else if (blauweschimmels == "ja"){
            var korst2 = prompt("heeft de kaas een korst ?")
            korst2 = korst2.toLowerCase(); 
        }

        if (korst2 == "ja") {
          	alert("De kaas is Bleu de Rochbaron")
        } 

        else if (korst2 == "nee"){
        	  alert("De kaas is Foume d'Ambert")
        } 