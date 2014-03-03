$('form').submit(
	function(e) {
		// stop form submission
		e.preventDefault();
		
		var tech	= $(this).find("#tech").val();
		if (tech) 
		{
			$(this).find("#techDiv").removeClass("has-error");
			
			var ing1qual	= parseFloat($(this).find("#Ing1_Quality").val().replace(',', '.'));
			var ing2qual	= parseFloat($(this).find("#Ing2_Quality").val().replace(',', '.'));
			var ing3qual	= parseFloat($(this).find("#Ing3_Quality").val().replace(',', '.'));
			var ing4qual	= parseFloat($(this).find("#Ing4_Quality").val().replace(',', '.'));	
			
			var ing1price	= parseFloat($(this).find("#Ing1_Price").val().replace(',', '.'));
			var ing2price	= parseFloat($(this).find("#Ing2_Price").val().replace(',', '.'));
			var ing3price	= parseFloat($(this).find("#Ing3_Price").val().replace(',', '.'));
			var ing4price	= parseFloat($(this).find("#Ing4_Price").val().replace(',', '.'));
			
			var eff			= parseFloat($(this).find("#Eff").val().replace('%', '')) / 100;
			
			var Sale_Price	= $(this).find("#Sale_Price").val();
			
			
			if (typeof ing1base_quan == "undefined"){ ing1base_quan = parseFloat($(this).find("#Ing1_Quantity").text().replace(' ед.', '')); }
			if (typeof ing2base_quan == "undefined"){ ing2base_quan = parseFloat($(this).find("#Ing2_Quantity").text().replace(' ед.', '')); }
			if (typeof ing3base_quan == "undefined"){ ing3base_quan = parseFloat($(this).find("#Ing3_Quantity").text().replace(' ед.', '')); }
			if (typeof ing4base_quan == "undefined"){ ing4base_quan = parseFloat($(this).find("#Ing4_Quantity").text().replace(' ед.', '')); }
			
			//количество товаров производимых 1 человеком
			if (typeof prodbase_quan == "undefined"){ prodbase_quan = parseFloat($(this).find("#Prod_Quantity").text().replace(' ед.', '')); }
			
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
			$(this).find("#Ing1_Quantity").text(Ing1_Quantity.toFixed(2) + " ед.");
			$(this).find("#Ing2_Quantity").text(Ing2_Quantity.toFixed(2) + " ед.");
			$(this).find("#Ing3_Quantity").text(Ing3_Quantity.toFixed(2) + " ед.");
			$(this).find("#Ing4_Quantity").text(Ing4_Quantity.toFixed(2) + " ед.");
			
			//цена ингридиентов
			var Ing1_TotalPrice = Ing1_Quantity * ing1price;
			var Ing2_TotalPrice = Ing2_Quantity * ing2price;	
			var Ing3_TotalPrice = Ing3_Quantity * ing3price;		
			var Ing4_TotalPrice = Ing4_Quantity * ing4price;					
			$(this).find("#Ing1_TotalPrice").text( "$" + Ing1_TotalPrice.toFixed(2) );
			$(this).find("#Ing2_TotalPrice").text( "$" + Ing2_TotalPrice.toFixed(2) );
			$(this).find("#Ing3_TotalPrice").text( "$" + Ing3_TotalPrice.toFixed(2) );
			$(this).find("#Ing4_TotalPrice").text( "$" + Ing4_TotalPrice.toFixed(2) );
			
			//общая цена ингрдиентов
			var IngTotalPrice = Ing1_TotalPrice + Ing2_TotalPrice + Ing3_TotalPrice + Ing4_TotalPrice;
			$(this).find("#IngTotalPrice").text( "$" + IngTotalPrice.toFixed(2) );					
			
			//объем выпускаемой продукции
			var Prod_Quantity = work_qaunt * prodbase_quan * Math.pow(1.05, tech-1) *  eff;
			$(this).find("#Prod_Quantity").text( Math.round (Prod_Quantity) + " ед." );			
			
			//итоговое качество ингридиентов
			var IngTotalQual = ( ing1base_quan * ing1qual + ing2base_quan * ing2qual + ing3base_quan * ing3qual + ing4base_quan * ing4qual )/
			( ing1base_quan + ing2base_quan + ing3base_quan + ing4base_quan );
			
			//качество товара
			var ProdQual = Math.pow(IngTotalQual, 0.5) * Math.pow(tech, 0.65) ;
			//ограничение качества (по технологии)
			if (ProdQual > Math.pow(tech, 1.3) ) {ProdQual = Math.pow(tech, 1.3)}
			$(this).find("#ProdQual").text( ProdQual.toFixed(2) );
			
			//себестоимость
			var exps = IngTotalPrice + work_salary * work_qaunt;
			$(this).find("#Cost").text( "$" + (exps / Prod_Quantity).toFixed(2) );
			
			//прибыль
			var profit = ( Sale_Price * Prod_Quantity ) - exps;
			$(this).find("#profit").text( "$" + profit.toFixed(2) );
			
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
			var ing1cost = Ing1_TotalPrice / IngTotalPrice * 100;
			var ing2cost = Ing2_TotalPrice / IngTotalPrice * 100;
			var ing3cost = Ing3_TotalPrice / IngTotalPrice * 100;
			var ing4cost = Ing4_TotalPrice / IngTotalPrice * 100;
			$(this).find("#ing1").width( ing1cost.toFixed(2) + "%" );
			$(this).find("#ing2").width( ing2cost.toFixed(2) + "%" );
			$(this).find("#ing3").width( ing3cost.toFixed(2) + "%" );
			$(this).find("#ing4").width( ing4cost.toFixed(2) + "%" );
		}
		else {$(this).find("#techDiv").addClass("has-error");};
	}
);