$(document).ready(function() { 
    var Hotel2 = ["Hotel Boston", "Hotel NH Tablas", "Hotel Nuevo Madrid", "Hotel Moncloa"];
    var Hotel3 = ["Hotel Parque", "Hotel Recio", "Hotel Mayor", "Hotel Stadium"];
    var Hotel4 = ["Hotel Av.America", "Hotel Plaza España", "Hotel Ruben Darío", "Hotel Levin"];
    var Hotel5 = ["Hotel Xanadú", "Hotel La vaguada", "Hotel Palace", "Hotel Rich"];

    var Hotel6 = ["Hotel Badalona", "Hotel NH Noy", "Hotel Nou nit", "Hotel Camper"];
    var Hotel7 = ["Hotel Pwc", "Hotel Jord", "Hotel Javing", "Hotel Montjuic"];
    var Hotel8 = ["Hotel Gran via", "Hotel Sagrada Familia", "Hotel Andorra", "Hotel Picolin"];
    var Hotel9 = ["Hotel Girones", "Hotel Reux", "Hotel Gerards", "Hotel Buseq"];

    var Hotel10 = ["Hotel Benidorn", "Hotel NH Granvia", "Hotel Nuevo Valencia", "Hotel Fallero"];
    var Hotel11 = ["Hotel Ryscer", "Hotel Puntazo", "Hotel Costa Brava", "Hotel Malvarrosa"];
    var Hotel12 = ["Hotel Av.España", "Hotel Italica", "Hotel AntonioMachado", "Hotel Palter"];
    var Hotel13 = ["Hotel Xanter", "Hotel Brill", "Hotel Geniuos", "Hotel Rodoeñ"];



    $("#revertible").hide();
    $( document ).tooltip();
    $( ".datepicker" ).datepicker();
    $( "#number" ).selectmenu().selectmenu( "menuWidget" );
    $( ".menu" ).menu();
    $( "#tabs" ).tabs();

    $(".categoria1M").click({hoteles: Hotel2},autocompletar);
    $(".categoria2M").click({hoteles: Hotel3},autocompletar);
    $(".categoria3M").click({hoteles: Hotel4},autocompletar);
    $(".categoria4M").click({hoteles: Hotel5},autocompletar);
    $(".categoria1B").click({hoteles: Hotel6},autocompletar);
    $(".categoria2B").click({hoteles: Hotel7},autocompletar);
    $(".categoria3B").click({hoteles: Hotel8},autocompletar);
    $(".categoria4B").click({hoteles: Hotel9},autocompletar);
    $(".categoria1V").click({hoteles: Hotel10},autocompletar);
    $(".categoria2V").click({hoteles: Hotel11},autocompletar);
    $(".categoria3V").click({hoteles: Hotel12},autocompletar);
    $(".categoria4V").click({hoteles: Hotel13},autocompletar);

    $("#Rellenar").button().click(PanelReserva);
    //$("#dialog" ).dialog();
    $(".draggable" ).draggable();
    $("#revertible").draggable({
        revert: true
    });
    $("#droppable" ).droppable({
        drop: function( event, ui ) {
            $( this ).addClass("ui-state-highlight" ).find( "p" ).html( "Reserva realizada");
            $("#dialog").html($("#revertible").html());
            $("#dialog" ).dialog();
        }
    });
    $("#TuReserva").click(function(){
        $("#dialog").dialog();
    });
});
    
function autocompletar(event){
    $(".tags").autocomplete({
        source: event.data.hoteles
    });
}
function PanelReserva(){
    var options = { percent: 100 };
    $("#revertible").show("scale", RellenarReserva);
}

function RellenarReserva(){
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $("#habitacion" ).effect( "transfer", options, 1000, RellenaHabitacion);
}

function RellenaHabitacion(){
    $( "#revertible" ).html("<p><strong>Tipo de habitación : " + $("#number").val());
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $( "#fechaEntrada" ).effect( "transfer", options, 1000, RellenaFechEntrada );
}

function RellenaFechEntrada() {
    $("#revertible").append("<p>Fecha de entrada: " + $( "#fechaEntrada" ).val() + "<p>");
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $("#fechaSalida").effect( "transfer", options, 1000, RellenaFechSalida );  
};

function RellenaFechSalida() {
    $("#revertible").append("<p>Fecha de salida: " + $( "#fechaSalida" ).val() + "<p>");
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $("#Hotel").effect( "transfer", options, 1000, RellenaHotel);
};

function RellenaHotel() {
    $("#revertible").append("<p>Hotel: " + $( "#Hotel" ).val() + "<p>");
};


