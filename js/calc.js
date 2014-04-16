String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//развернуть/свернуть все спойлеры
$( "#all_spoilers" ).click(function() {
		var all_spoilers = document.querySelectorAll(".spoiler");
		for (var i=0; i<all_spoilers.length; i++) 
		all_spoilers[i].click();
		if ( $("#all_spoilers").html() == "<span class=\"glyphicon glyphicon-plus\"></span> Развернуть все" ) 
		{ $("#all_spoilers").html( "<span class=\"glyphicon glyphicon-minus\"></span> Свернуть все" ) } 
		else { $("#all_spoilers").html( "<span class=\"glyphicon glyphicon-plus\"></span> Развернуть все" ) }
		
});

//рассчитать все формы
$( "#calc_all" ).click(function() {
		var calc_buttons = document.querySelectorAll("#DoCalc");
		for (var i=0; i<calc_buttons.length; i++) 
		calc_buttons[i].click();
});


//спойлеры
$(document).ready(function(){
	$('.spoiler-text').hide()
	$('.spoiler').click(function(){
		$(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle()
	})
	
	//открываем первый спойлер
	var all_spoilers = document.querySelectorAll(".spoiler");
	if ( all_spoilers[0] ) { all_spoilers[0].click()}
})


//резделитель разрядов
function commaSeparateNumber(val){
while (/(\d+)(\d{3})/.test(val.toString())){
  val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
return val;
}

$('form').submit(
	function(e) {
		// stop form submission
		e.preventDefault();
		
		var tech	= $(this).find("#tech").val();
		if (tech) 
		{
			$(this).find("#techDiv").removeClass("has-error");
			
			if ( $(this).find("#Ing1_Quality").val() ) {var ing1qual = parseFloat($(this).find("#Ing1_Quality").val().replace(',', '.'));} else { var ing1qual = 0}
			if ( $(this).find("#Ing2_Quality").val() ) {var ing2qual = parseFloat($(this).find("#Ing2_Quality").val().replace(',', '.'));} else { var ing2qual = 0}
			if ( $(this).find("#Ing3_Quality").val() ) {var ing3qual = parseFloat($(this).find("#Ing3_Quality").val().replace(',', '.'));} else { var ing3qual = 0}
			if ( $(this).find("#Ing4_Quality").val() ) {var ing4qual = parseFloat($(this).find("#Ing4_Quality").val().replace(',', '.'));} else { var ing4qual = 0}
			if ( $(this).find("#Ing5_Quality").val() ) {var ing5qual = parseFloat($(this).find("#Ing5_Quality").val().replace(',', '.'));} else { var ing5qual = 0}
			if ( $(this).find("#Ing6_Quality").val() ) {var ing6qual = parseFloat($(this).find("#Ing6_Quality").val().replace(',', '.'));} else { var ing6qual = 0}
			if ( $(this).find("#Ing7_Quality").val() ) {var ing7qual = parseFloat($(this).find("#Ing7_Quality").val().replace(',', '.'));} else { var ing7qual = 0}
			if ( $(this).find("#Ing8_Quality").val() ) {var ing8qual = parseFloat($(this).find("#Ing8_Quality").val().replace(',', '.'));} else { var ing8qual = 0}
			if ( $(this).find("#Ing9_Quality").val() ) {var ing9qual = parseFloat($(this).find("#Ing9_Quality").val().replace(',', '.'));} else { var ing9qual = 0}
			if ( $(this).find("#Ing10_Quality").val() ) {var ing10qual = parseFloat($(this).find("#Ing10_Quality").val().replace(',', '.'));} else { var ing10qual = 0}
			if ( $(this).find("#Ing11_Quality").val() ) {var ing11qual = parseFloat($(this).find("#Ing11_Quality").val().replace(',', '.'));} else { var ing11qual = 0}
			if ( $(this).find("#Ing12_Quality").val() ) {var ing12qual = parseFloat($(this).find("#Ing12_Quality").val().replace(',', '.'));} else { var ing12qual = 0}
			if ( $(this).find("#Ing13_Quality").val() ) {var ing13qual = parseFloat($(this).find("#Ing13_Quality").val().replace(',', '.'));} else { var ing13qual = 0}
			
			if ( $(this).find("#Ing1_Price").val() ) { var ing1price = parseFloat($(this).find("#Ing1_Price").val().replace(',', '.'));} else { var ing1price = 0}
			if ( $(this).find("#Ing2_Price").val() ) { var ing2price = parseFloat($(this).find("#Ing2_Price").val().replace(',', '.'));} else { var ing2price = 0}
			if ( $(this).find("#Ing3_Price").val() ) { var ing3price = parseFloat($(this).find("#Ing3_Price").val().replace(',', '.'));} else { var ing3price = 0}
			if ( $(this).find("#Ing4_Price").val() ) { var ing4price = parseFloat($(this).find("#Ing4_Price").val().replace(',', '.'));} else { var ing4price = 0}
			if ( $(this).find("#Ing5_Price").val() ) { var ing5price = parseFloat($(this).find("#Ing5_Price").val().replace(',', '.'));} else { var ing5price = 0}
			if ( $(this).find("#Ing6_Price").val() ) { var ing6price = parseFloat($(this).find("#Ing6_Price").val().replace(',', '.'));} else { var ing6price = 0}
			if ( $(this).find("#Ing7_Price").val() ) { var ing7price = parseFloat($(this).find("#Ing7_Price").val().replace(',', '.'));} else { var ing7price = 0}
			if ( $(this).find("#Ing8_Price").val() ) { var ing8price = parseFloat($(this).find("#Ing8_Price").val().replace(',', '.'));} else { var ing8price = 0}
			if ( $(this).find("#Ing9_Price").val() ) { var ing9price = parseFloat($(this).find("#Ing9_Price").val().replace(',', '.'));} else { var ing9price = 0}
			if ( $(this).find("#Ing10_Price").val() ) { var ing10price = parseFloat($(this).find("#Ing10_Price").val().replace(',', '.'));} else { var ing10price = 0}
			if ( $(this).find("#Ing11_Price").val() ) { var ing11price = parseFloat($(this).find("#Ing11_Price").val().replace(',', '.'));} else { var ing11price = 0}
			if ( $(this).find("#Ing12_Price").val() ) { var ing12price = parseFloat($(this).find("#Ing12_Price").val().replace(',', '.'));} else { var ing12price = 0}
			if ( $(this).find("#Ing13_Price").val() ) { var ing13price = parseFloat($(this).find("#Ing13_Price").val().replace(',', '.'));} else { var ing13price = 0}
			
			if ( $(this).find("#animal_Quality").val() ) { var animal_Qual = parseFloat($(this).find("#animal_Quality").val().replace(',', '.'));}
			
			var animal_Quan = parseFloat($(this).find("#animals").val());
						
			var eff			= parseFloat($(this).find("#Eff").val().replace('%', '')) / 100;
			
			var Sale_Price	= $(this).find("#Sale_Price").val();
			var Sale_Price2	= $(this).find("#Sale_Price2").val();
			
			
			if ($(this).find("#Ing1_Q").val()) {var ing1base_quan = parseFloat($(this).find("#Ing1_Q").val()); } else { var ing1base_quan = 0 }
			if ($(this).find("#Ing2_Q").val()) {var ing2base_quan = parseFloat($(this).find("#Ing2_Q").val()); } else { var ing2base_quan = 0 }
			if ($(this).find("#Ing3_Q").val()) {var ing3base_quan = parseFloat($(this).find("#Ing3_Q").val()); } else { var ing3base_quan = 0 }
			if ($(this).find("#Ing4_Q").val()) {var ing4base_quan = parseFloat($(this).find("#Ing4_Q").val()); } else { var ing4base_quan = 0 }
			if ($(this).find("#Ing5_Q").val()) {var ing5base_quan = parseFloat($(this).find("#Ing5_Q").val()); } else { var ing5base_quan = 0 }
			if ($(this).find("#Ing6_Q").val()) {var ing6base_quan = parseFloat($(this).find("#Ing6_Q").val()); } else { var ing6base_quan = 0 }
			if ($(this).find("#Ing7_Q").val()) {var ing7base_quan = parseFloat($(this).find("#Ing7_Q").val()); } else { var ing7base_quan = 0 }
			if ($(this).find("#Ing8_Q").val()) {var ing8base_quan = parseFloat($(this).find("#Ing8_Q").val()); } else { var ing8base_quan = 0 }
			if ($(this).find("#Ing9_Q").val()) {var ing9base_quan = parseFloat($(this).find("#Ing9_Q").val()); } else { var ing9base_quan = 0 }
			if ($(this).find("#Ing10_Q").val()) {var ing10base_quan = parseFloat($(this).find("#Ing10_Q").val()); } else { var ing10base_quan = 0 }
			if ($(this).find("#Ing11_Q").val()) {var ing11base_quan = parseFloat($(this).find("#Ing11_Q").val()); } else { var ing11base_quan = 0 }
			if ($(this).find("#Ing12_Q").val()) {var ing12base_quan = parseFloat($(this).find("#Ing12_Q").val()); } else { var ing12base_quan = 0 }
			if ($(this).find("#Ing13_Q").val()) {var ing13base_quan = parseFloat($(this).find("#Ing13_Q").val()); } else { var ing13base_quan = 0 }
			
			//количество товаров производимых 1 человеком
			var prodbase_quan  = parseFloat($(this).find("#Prod1_Quantity").val());
			var prodbase_quan2  = parseFloat($(this).find("#Prod2_Quantity").val());
			
			var work_qaunt	= $(this).find("#work_quan").val();
			var work_salary	= $(this).find("#work_salary").val().replace(',', '.');
			
			//квалификация работников
			var PersonalQual = Math.pow(tech, 0.8) ;
			$(this).find("#PersonalQual").text(PersonalQual.toFixed(2));
			
			//качество станков
			var EquipQuan = Math.pow(tech, 1.2) ;
			$(this).find("#EquipQuan").text(EquipQuan.toFixed(2));
			
			//количество ингридиентов
			var Ing1_Quantity = ing1base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing2_Quantity = ing2base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing3_Quantity = ing3base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing4_Quantity = ing4base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing5_Quantity = ing5base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing6_Quantity = ing6base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing7_Quantity = ing7base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing8_Quantity = ing8base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing9_Quantity = ing9base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing10_Quantity = ing10base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing11_Quantity = ing11base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing12_Quantity = ing12base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
			var Ing13_Quantity = ing13base_quan * prodbase_quan * work_qaunt * Math.pow(1.05, tech-1 ) * eff;
				//ферма
				if ( $(this).find("#animal_Quantity").text() ) {var Ing1_Quantity = ing1base_quan * animal_Quan * work_qaunt;}
				$(this).find("#animal_Quantity").text(commaSeparateNumber(animal_Quan * work_qaunt) + " ед.")
			
			$(this).find("#Ing1_Quantity").text(commaSeparateNumber( Math.ceil( Ing1_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing2_Quantity").text(commaSeparateNumber( Math.ceil( Ing2_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing3_Quantity").text(commaSeparateNumber( Math.ceil( Ing3_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing4_Quantity").text(commaSeparateNumber( Math.ceil( Ing4_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing5_Quantity").text(commaSeparateNumber( Math.ceil( Ing5_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing6_Quantity").text(commaSeparateNumber( Math.ceil( Ing6_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing7_Quantity").text(commaSeparateNumber( Math.ceil( Ing7_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing8_Quantity").text(commaSeparateNumber( Math.ceil( Ing8_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing9_Quantity").text(commaSeparateNumber( Math.ceil( Ing9_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing10_Quantity").text(commaSeparateNumber( Math.ceil( Ing10_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing11_Quantity").text(commaSeparateNumber( Math.ceil( Ing11_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing12_Quantity").text(commaSeparateNumber( Math.ceil( Ing12_Quantity.toFixed(2)) ) + " ед.");
			$(this).find("#Ing13_Quantity").text(commaSeparateNumber( Math.ceil( Ing13_Quantity.toFixed(2)) ) + " ед.");
						
			//цена ингридиентов
			if (ing1price > 0) {var Ing1_TotalPrice = Ing1_Quantity * ing1price;} else { var Ing1_TotalPrice = 0}
			if (ing2price > 0) {var Ing2_TotalPrice = Ing2_Quantity * ing2price;} else { var Ing2_TotalPrice = 0}
			if (ing3price > 0) {var Ing3_TotalPrice = Ing3_Quantity * ing3price;} else { var Ing3_TotalPrice = 0}
			if (ing4price > 0) {var Ing4_TotalPrice = Ing4_Quantity * ing4price;} else { var Ing4_TotalPrice = 0}
			if (ing5price > 0) {var Ing5_TotalPrice = Ing5_Quantity * ing5price;} else { var Ing5_TotalPrice = 0}
			if (ing6price > 0) {var Ing6_TotalPrice = Ing6_Quantity * ing6price;} else { var Ing6_TotalPrice = 0}
			if (ing7price > 0) {var Ing7_TotalPrice = Ing7_Quantity * ing7price;} else { var Ing7_TotalPrice = 0}
			if (ing8price > 0) {var Ing8_TotalPrice = Ing8_Quantity * ing8price;} else { var Ing8_TotalPrice = 0}
			if (ing9price > 0) {var Ing9_TotalPrice = Ing9_Quantity * ing9price;} else { var Ing9_TotalPrice = 0}
			if (ing10price > 0) {var Ing10_TotalPrice = Ing10_Quantity * ing10price;} else { var Ing10_TotalPrice = 0}
			if (ing11price > 0) {var Ing11_TotalPrice = Ing11_Quantity * ing11price;} else { var Ing11_TotalPrice = 0}
			if (ing12price > 0) {var Ing12_TotalPrice = Ing12_Quantity * ing12price;} else { var Ing12_TotalPrice = 0}
			if (ing13price > 0) {var Ing13_TotalPrice = Ing13_Quantity * ing13price;} else { var Ing13_TotalPrice = 0}
		
			$(this).find("#Ing1_TotalPrice").text( "$" + commaSeparateNumber(Ing1_TotalPrice.toFixed(2)) );
			$(this).find("#Ing2_TotalPrice").text( "$" + commaSeparateNumber(Ing2_TotalPrice.toFixed(2)) );
			$(this).find("#Ing3_TotalPrice").text( "$" + commaSeparateNumber(Ing3_TotalPrice.toFixed(2)) );
			$(this).find("#Ing4_TotalPrice").text( "$" + commaSeparateNumber(Ing4_TotalPrice.toFixed(2)) );
			$(this).find("#Ing5_TotalPrice").text( "$" + commaSeparateNumber(Ing5_TotalPrice.toFixed(2)) );
			$(this).find("#Ing6_TotalPrice").text( "$" + commaSeparateNumber(Ing6_TotalPrice.toFixed(2)) );
			$(this).find("#Ing7_TotalPrice").text( "$" + commaSeparateNumber(Ing7_TotalPrice.toFixed(2)) );
			$(this).find("#Ing8_TotalPrice").text( "$" + commaSeparateNumber(Ing8_TotalPrice.toFixed(2)) );
			$(this).find("#Ing9_TotalPrice").text( "$" + commaSeparateNumber(Ing9_TotalPrice.toFixed(2)) );
			$(this).find("#Ing10_TotalPrice").text( "$" + commaSeparateNumber(Ing10_TotalPrice.toFixed(2)) );
			$(this).find("#Ing11_TotalPrice").text( "$" + commaSeparateNumber(Ing11_TotalPrice.toFixed(2)) );
			$(this).find("#Ing12_TotalPrice").text( "$" + commaSeparateNumber(Ing12_TotalPrice.toFixed(2)) );
			$(this).find("#Ing13_TotalPrice").text( "$" + commaSeparateNumber(Ing13_TotalPrice.toFixed(2)) );
			
			//общая цена ингридиентов
			var IngTotalPrice = Ing1_TotalPrice + Ing2_TotalPrice + Ing3_TotalPrice + Ing4_TotalPrice + 
								Ing5_TotalPrice + Ing6_TotalPrice + Ing7_TotalPrice +Ing8_TotalPrice + 
								Ing9_TotalPrice + Ing10_TotalPrice + Ing11_TotalPrice + Ing12_TotalPrice + Ing13_TotalPrice;
			$(this).find("#IngTotalPrice").text( "$" + commaSeparateNumber(IngTotalPrice.toFixed(2)) );					
			
			//объем выпускаемой продукции
			var Prod_Quantity = work_qaunt * prodbase_quan * Math.pow(1.05, tech-1) *  eff;
					//для шахт
					if ( $(this).find("#ResDif").val() ) { Prod_Quantity = Prod_Quantity * $(this).find("#ResDif").val() }
					
					//фермы
					if ( $(this).find("#ResFQ") ) 
					{ 
						Prod_Quantity2 = Prod_Quantity / 52;
						$(this).find("#Prod_Quantity2").text( commaSeparateNumber( Math.round (Prod_Quantity2) ) + " ед. / нед." );
					}

			$(this).find("#Prod_Quantity").text( commaSeparateNumber( Math.round (Prod_Quantity) ) + " ед." );			
			
			//объем 2ой выпускаемой продукции
			if ( $(this).find("#Bonus2").val() ) 
			{
				var Prod_Quantity2 = work_qaunt * prodbase_quan2 * Math.pow(1.05, tech-1) *  eff;
				$(this).find("#Prod_Quantity2").text( commaSeparateNumber( Math.round (Prod_Quantity2) ) + " ед." );		
			}
			
			//итоговое качество ингридиентов
			var IngTotalQual = ( ( ing1base_quan * ing1qual + ing2base_quan * ing2qual + ing3base_quan * ing3qual + ing4base_quan * ing4qual +
								ing5base_quan * ing5qual + ing6base_quan * ing6qual + ing7base_quan * ing7qual +ing8base_quan * ing8qual +
								ing9base_quan * ing9qual + ing10base_quan * ing10qual + ing11base_quan * ing11qual +
								ing12base_quan * ing12qual + ing13base_quan * ing13qual)/
								( ing1base_quan + ing2base_quan + ing3base_quan + ing4base_quan + ing5base_quan + ing6base_quan + ing7base_quan +
								ing8base_quan + ing9base_quan + ing10base_quan + ing11base_quan + ing12base_quan + ing13base_quan) ) * eff;
					//ферма
					if ( $(this).find("#animal_Quality").val() ) { var IngTotalQual = ( ing1qual * 0.3 + animal_Qual * 0.7 ) * eff; }	
			//качество товара
			var ProdQual = Math.pow(IngTotalQual, 0.5) * Math.pow(tech, 0.65)  * ( 1 + $(this).find("#Bonus").val().replace('%', '') / 100 );
					//шахты
					if ( $(this).find("#ResQ").val() ) { ProdQual = Math.pow(tech, 0.65) * $(this).find("#ResQ").val() * eff }
					//фермы
					if ( $(this).find("#ResFQ").val() ) { ProdQual = Math.pow(tech, 0.65) * Math.pow($(this).find("#ResFQ").val(), 0.5) * eff }					
			//ограничение качества (по технологии)
			if (ProdQual > Math.pow(tech, 1.3) ) {ProdQual = Math.pow(tech, 1.3)}
			if ( ProdQual < 1 ) { ProdQual = 1 }			
			$(this).find("#ProdQual").text( ProdQual.toFixed(2) ) ;
			
			//если есть второй продукт производства
			if ( $(this).find("#Bonus2").val() ) 
			{
				var ProdQual2 = Math.pow(IngTotalQual, 0.5) * Math.pow(tech, 0.65)  * ( 1 + $(this).find("#Bonus2").val().replace('%', '') / 100 );
				if (ProdQual2 > Math.pow(tech, 1.3) ) {ProdQual2 = Math.pow(tech, 1.3)}
				if ( ProdQual2 < 1 ) { ProdQual2 = 1 }			
				$(this).find("#ProdQual2").text( ProdQual2.toFixed(2) ) ;
			}
			
			//себестоимость
			var zp = work_salary * work_qaunt;
			var exps = IngTotalPrice + zp + zp * 0.1 ;
			$(this).find("#Cost").text( "$" + commaSeparateNumber((exps / Prod_Quantity).toFixed(2)) );
			
			if ( $(this).find("#Bonus2").val() ) 
			{
				$(this).find("#Cost").text( "$" + commaSeparateNumber((exps / Prod_Quantity / 2).toFixed(2)) );			
				$(this).find("#Cost2").text( "$" + commaSeparateNumber((exps / Prod_Quantity2 / 2).toFixed(2)) );
			}			
			
			//прибыль
			var profit = ( Sale_Price * Prod_Quantity ) - exps;
			$(this).find("#profit").text( "$" + commaSeparateNumber(profit.toFixed(2)) );
					//фермы
					if ( $(this).find("#ResFQ") ) { $(this).find("#profit1").text( "$" + commaSeparateNumber( (profit / 52).toFixed(2) ) ) }
			
			if ( $(this).find("#Bonus2").val() ) 
			{
				var profit = ( Sale_Price * Prod_Quantity + Sale_Price2 * Prod_Quantity2 ) - exps;
				$(this).find("#profit").text( "$" + commaSeparateNumber(profit.toFixed(2)) );
			}	
			
			//подсветка прибыли
			$(this).find("#profit").removeClass("label-danger");
			$(this).find("#profit").removeClass("label-success");
			if (profit > 0) 
			{
				$(this).find("#profit").addClass("label-success");
			}
			else
			{
				$(this).find("#profit").addClass("label-danger");
			}
			
			//доля ингридиентов в расходах
			if ( !$(this).find("#animal_Quantity").text() ) {
				var ing1cost = Ing1_TotalPrice / IngTotalPrice * 100;
				var ing2cost = Ing2_TotalPrice / IngTotalPrice * 100;
				var ing3cost = Ing3_TotalPrice / IngTotalPrice * 100;
				var ing4cost = Ing4_TotalPrice / IngTotalPrice * 100;
				var ing5cost = Ing5_TotalPrice / IngTotalPrice * 100;
				var ing6cost = Ing6_TotalPrice / IngTotalPrice * 100;
				var ing7cost = Ing7_TotalPrice / IngTotalPrice * 100;
				var ing8cost = Ing8_TotalPrice / IngTotalPrice * 100;
				var ing9cost = Ing9_TotalPrice / IngTotalPrice * 100;
				var ing10cost = Ing10_TotalPrice / IngTotalPrice * 100;
				var ing11cost = Ing11_TotalPrice / IngTotalPrice * 100;
				var ing12cost = Ing12_TotalPrice / IngTotalPrice * 100;
				var ing13cost = Ing13_TotalPrice / IngTotalPrice * 100;
				$(this).find("#ing1").width( ing1cost + "%" );
				$(this).find("#ing2").width( ing2cost + "%" );
				$(this).find("#ing3").width( ing3cost + "%" );
				$(this).find("#ing4").width( ing4cost + "%" );
				$(this).find("#ing5").width( ing5cost + "%" );
				$(this).find("#ing6").width( ing6cost + "%" );
				$(this).find("#ing7").width( ing7cost + "%" );
				$(this).find("#ing8").width( ing8cost + "%" );
				$(this).find("#ing9").width( ing9cost + "%" );
				$(this).find("#ing10").width( ing10cost + "%" );
				$(this).find("#ing11").width( ing11cost + "%" );
				$(this).find("#ing12").width( ing12cost + "%" );
				$(this).find("#ing13").width( ing13cost + "%" );
			}
		}
		else {$(this).find("#techDiv").addClass("has-error");};
	}
);