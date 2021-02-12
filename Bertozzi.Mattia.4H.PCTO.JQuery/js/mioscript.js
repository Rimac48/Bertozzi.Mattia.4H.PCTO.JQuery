jQuery(function()   {

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    }
    );

    var i=0;
    var personeinserite=0;
    var NomeCognome = [];
    jQuery("#btnInserisci").on("click",function()
    {
        //qui prendo le variabili dai box
        var Nome = jQuery("#txtNome").val();
        var Cognome = jQuery("#txtCognome").val();

            NomeCognome[i] = Nome + " " + Cognome;

            var flag=0;
        
            if(i>=1)
            {
                for(var x=0;x<i;x++)
                {
                   if(NomeCognome[x]==NomeCognome[i])
                  {
                    $('#btnMsg1').click();
                    jQuery("#staticBackdropLabel").html("Attenzione")
                    jQuery("#corpoMsg").html("Il nominativo è già presente")
                    jQuery("#btnAnnulla").html("Chiudi")
                    jQuery("#btnConferma").prop("hidden",true);
                    flag=1;
                    f=1;
                    }
                }
                if(flag==0)
                {
                    personeinserite++;
                }
            }
            if(flag==0)
            {

                $('#btnMsg1').click();
                jQuery("#staticBackdropLabel").html("Sei Sicuro?")
                jQuery("#corpoMsg").html("Vuoi confermare l'inserimento?")
                jQuery("#btnAnnulla").html("Annulla")
                jQuery("#btnConferma").prop("hidden",false);
                jQuery("#btnConferma").html("Conferma")
        
                jQuery("#btnConferma").on("click",function(){

                //genera e posiziona la casella con il nome e il cognome
                if(personeinserite==i)
                {
                    var blocco = jQuery("<div>"+ NomeCognome[i] + "</div>");
                    blocco.addClass("bordo");
                    blocco.appendTo(".caselladestra");
                    i++;
                }
                }); 
            }
    });
});