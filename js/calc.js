
//регулятор бонусов
function setBonus(val, callbtn){
	if ( callbtn.hasClass("btn-warning") ) { val = -val;}
	callbtn.toggleClass("btn-default").toggleClass("btn-warning");
	callbtn.closest('form').find('#Bonus').val(parseFloat(callbtn.closest('form').find('#Bonus').val()) + val + '%');
	callbtn.closest('form').find('#Bonus2').val(parseFloat(callbtn.closest('form').find('#Bonus2').val()) + val + '%');
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//развернуть/свернуть все спойлеры1
$( "#all_spoilers" ).click(function() {
		if ($("#all_spoilers span").hasClass('glyphicon-plus')) { 
			$("#all_spoilers").html( "<span class=\"glyphicon glyphicon-minus\"></span> Свернуть все" );
			$(".spoiler-text").slideDown(); 
		} else { 
			$("#all_spoilers").html( "<span class=\"glyphicon glyphicon-plus\"></span> Развернуть все" );
			$(".spoiler-text").slideUp(); 
		};
});

//рассчитать все формы
$("#calc_all" ).click(function() {
		 $("[id=DoCalc]").click();
});


//спойлеры
$(document).ready(function(){
	$('.spoiler-text').hide();
	$('.spoiler').click(function(){
		$(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle()
	});
	//открываем первый спойлер
	$(".spoiler").first().click();	
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
		var arr_envd={"Алмазы":100,"Марганец":100,"Медный колчедан":100,"Титановая руда":100,"Хром":100,"Бокситы":100,"Глина":100,"Древесина":30,"Железная руда":100,"Золото":100,"Кремний":100,"Нефть":100,"Природные минералы":100,"Уголь":100,"LED":20,"Авиадвигатель":10,"Авиашасси":10,"Авионика":10,"Автозапчасти":20,"Зеркальный лист":20,"Интерьер самолета":10,"Корпус яхты":20,"Косметическое масло":20,"Медь":20,"Натуральные лекарственные компоненты":20,"Оснащение яхты":20,"Отходы хлопчатника":10,"Парфюмерная эссенция":20,"Рыболовная сеть":10,"Сверхлёгкий алюминиевый сплав":20,"Секция фюзеляжа":10,"Синтетические лекарственные компоненты":20,"Термоэлемент":20,"Титан":20,"Углепластик":10,"Хлопковая ткань":20,"Хлопковое волокно":10,"Шёлк":20,"Электропривод":20,"Элементы авиакрыла":10,"Элементы авиаоперения":10,"Этанол":20,"Алюминий":20,"Бумага":5,"Двигатель":20,"Кожа":5,"Комплектующие":20,"Краска":5,"Пластмасса":10,"Резина":10,"Синтетическая ткань":5,"Сталь":20,"Стекло":20,"Ткань":20,"Химикаты":20,"Шерсть":20,"Электронные компоненты":20,"Арахис":10,"Комбикорм":10,"Кофе":10,"Кукуруза":5,"Оливки":10,"Рис":5,"Соя":10,"Табак":5,"Цветы и эфиромасличные культуры":5,"Чайный лист":5,"Зерно":10,"Какао":10,"Молоко":10,"Мясо":20,"Сахар":10,"Фрукты":5,"Хлопок":10,"Яйца":10,"Бурбон":10,"Джем":10,"Консервированная кукуруза":15,"Консервированные оливки":15,"Красная икра":20,"Кукурузная мука":10,"Кукурузные хлопья":5,"Ликер":10,"Масло":10,"Натуральный кофе":20,"Оливковое масло":20,"Продукты быстрого приготовления":5,"Растворимый кофе":5,"Рыбные деликатесы":20,"Рыбные консервы":15,"Соусы":5,"Специи":20,"Сыр":10,"Сыр фета":10,"Чай":5,"Черная икра":50,"Энергетические напитки":10,"Колбасные изделия":15,"Кондитерские изделия":15,"Макаронные изделия":5,"Молочные продукты":10,"Мороженое":15,"Мука":10,"Пиво":10,"Прохладительные напитки":10,"Сок":10,"Спиртные напитки":10,"Хлеб":10,"Шоколад":10,"Конфеты":10,"Консервы":15,"LED-телевизоры":50,"Автомобильные багажники":20,"Автомобильные диски":20,"Антифриз":20,"Бейсболка":20,"Бронзовый декор":30,"Видеокамера":20,"Внедорожник":100,"Водный скутер":30,"Деловая одежда":20,"Джинсы":20,"Жемчужные украшения":50,"Зеркало":20,"Зонт":20,"Кондиционер":50,"Консервированный корм для животных":15,"Косметика":20,"Кофе-машина":50,"Кузовные запчасти":20,"Кухонная мебель":30,"Кухонные плиты":50,"Мебель":30,"Моторное масло":20,"Нижнее белье":20,"Носки":10,"Омыватель стекол":20,"Парфюмерия":20,"Платье":20,"Подарки и Сувениры":20,"Пончо":20,"Посудомоечные машины":50,"Садовый инвентарь":30,"Светильник":20,"Светодиодная лампа":15,"Седан":100,"Сигареты":20,"Сигары":10,"Смартфон":20,"Сомбреро":20,"Спорт-кар":100,"Спортинвентарь":20,"Столовое и постельное бельё":20,"Сухой корм для животных":15,"Тренажер":20,"Трикотаж":20,"Утюг":20,"Фен":20,"Чистящие средства":20,"Электроинструмент":20,"Автомобиль":100,"Холодильники":50,"Бытовая химия":20,"Аудиотехника":50,"Велосипед":20,"Игрушки":20,"Компьютер":30,"Спальная мебель":30,"Мобильный телефон":20,"Мотоцикл":30,"Обувь":20,"Одежда":20,"Посуда":20,"Пресса":15,"Фототехника":20,"Часы":30,"Шины":20,"Бижутерия":20,"Бриллианты":30,"Ювелирные украшения":50,"GPS-навигаторы":20,"Канцтовары":20,"Стиральные машины":50,"Телевизоры":50,"Сантехника":30,"Душевые кабинки":5,"Книги":15,"Гормональные препараты":10,"Лекарственные травы":20,"Медицинский антисептик":10,"Медицинский инструментарий":20,"Никотиновый пластырь":15,"Природные лекарства":20,"Синтетические лекарства":10,"Спортивное питание":10,"Средства гигиены":20,"Электронный тонометр":20,"Автозаправочное оборудование":30,"Авторемонтное оборудование":30,"Горно-шахтное оборудование":30,"Мазутный энергоблок":30,"Медицинское оборудование":30,"Мусороприёмное оборудование":30,"Мусоросжигательный энергоблок":30,"Парикмахерское оборудование":30,"Паровая турбина":30,"Паровой котёл":30,"Пилорама":30,"Ресторанное оборудование":30,"Рыболовецкий траулер":30,"Система очистки дымовых газов":30,"Теплообменное оборудование":30,"Топливное оборудование":30,"Топливораздаточная колонка":30,"Угольная мельница":30,"Угольный энергоблок":30,"Узкофюзеляжный самолет":10,"Прибор":30,"Станок":30,"Трактор":30,"Жемчуг":100,"Крабы":20,"Лосось":20,"Осетр":10,"Промысловая рыба":20,"Устрицы":20,"Домашняя птица":20,"Коровы":20,"Овцы":20,"Свиньи":20,"Арт декор":30,"Интерьер яхты":100,"Яхта":100,"Бензин Нормаль-80":100,"Бензин Премиум-95":100,"Бензин Регуляр-92":100,"Дизельное топливо":100,"Мазут":100};
		var envdTax = 1+arr_envd[$("#Prod_Quantity").parent().parent().prev().find('a').attr('title')]/100;
		if (isNaN(envdTax)) envdTax = 1;
		var tech = parseFloat($("#tech", this).val());
		if (tech) {
			$(this).find("#techDiv").removeClass("has-error");
			var ingQual = [],
				ingPrice = [],
				ingBaseQty = [],
				ingTotalPrice = [],
				ingCost = [],
				IngTotalCost = 0;

			$("input[id^='Ing_Quality']", this).each(function(){
				ingQual.push(parseFloat($(this).val().replace(',', '.')) || 0);
			});
			var num = ingQual.length;

			$("input[id^='Ing_Price']", this).each(function(){
				ingPrice.push(parseFloat($(this).val().replace(',', '.')) || 0);
			});
			
			if ( $("#animal_Quality", this).val() ) { 
				var animal_Qual = parseFloat($("#animal_Quality", this).val().replace(',', '.'));
			}
			
			var animal_Quan = parseFloat($("#animals", this).val());
						
			var eff			= parseFloat($("#Eff", this).val().replace('%', '')) / 100;
			
			var Sale_Price	= $("#Sale_Price", this).val();
			var Sale_Price2	= $("#Sale_Price2", this).val();
			
			$("input[id^='Ing_Qty']", this).each(function(){
				ingBaseQty.push(parseFloat($(this).val().replace(',', '.')) || 0);
			});
			
			// if ($(this).find("#Ing_Qty1").val()) {var ing1base_quan = parseFloat($(this).find("#Ing_Qty1").val()); } else { var ing1base_quan = 0 }
			
			//количество товаров производимых 1 человеком
			var prodbase_quan  = parseFloat($("#Prod1_Quantity", this).val());
			var prodbase_quan2  = parseFloat($("#Prod2_Quantity", this).val()) || 0;
			
			var work_quant	= parseFloat($("#work_quan", this).val());
			var work_salary	= parseFloat($("#work_salary", this).val().replace(',', '.'));
			
			//квалификация работников
			var PersonalQual = Math.pow(tech, 0.8) ;
			$("#PersonalQual", this).text(PersonalQual.toFixed(2));
			
			//качество станков
			var EquipQuan = Math.pow(tech, 1.2) ;
			$("#EquipQuan", this).text(EquipQuan.toFixed(2));
			
			var ingQuantity = [];

			//количество ингридиентов
			for (var i = 0; i < num; i++) {
				ingQuantity[i] = ingBaseQty[i] * prodbase_quan * work_quant * Math.pow(1.05, tech-1 ) * eff;
			};

			// ingQuantity[0] = ing1base_quan * prodbase_quan * work_quant * Math.pow(1.05, tech-1 ) * eff;
			
			//ферма
			if ( $("#animal_Quantity", this).text() ) { ingQuantity[0] = ingBaseQty[0] * animal_Quan * work_quant; }
			$("#animal_Quantity",this).text(commaSeparateNumber(animal_Quan * work_quant) + " ед.")
			
			$("span[id^='Ing_Quantity']", this).each(function(index){
				$(this).text(commaSeparateNumber( Math.ceil( ingQuantity[index].toFixed(2)) ) + " ед.");
			});

			// $(this).find("#Ing_Qty1uantity").text(commaSeparateNumber( Math.ceil( Ing_Qty1uantity.toFixed(2)) ) + " ед.");
						
			//цена ингридиентов
			for (var i = 0; i < num; i++) {
				if (ingPrice[i] > 0) {
					ingTotalPrice[i] = ingQuantity[i] * ingPrice[i];
				} else {
					ingTotalPrice[i] = 0;
				}
			};
						
			// if (ing1price > 0) {var Ing1_TotalPrice = Ing_Qty1uantity * ing1price;} else { var Ing1_TotalPrice = 0}
			
			$("span[id^='Ing_TotalPrice']", this).each(function(index){
				$(this).text("$" + commaSeparateNumber(ingTotalPrice[index].toFixed(2)));
			});

			// $(this).find("#Ing1_TotalPrice").text( "$" + commaSeparateNumber(Ing1_TotalPrice.toFixed(2)) );
			
			//общая цена ингридиентов
			for (var i = 0; i < num; i++) {
				IngTotalCost += ingTotalPrice[i];
			};
			
			$("#IngTotalPrice", this).text("$" + commaSeparateNumber(IngTotalCost.toFixed(2)));					

			//объем выпускаемой продукции
			var Prod_Quantity = work_quant * prodbase_quan * Math.pow(1.05, tech-1) *  eff;
					//для шахт
					if ( $("#ResDif", this).val() ) { 
						Prod_Quantity = Prod_Quantity * $("#ResDif", this).val();
						if ( $("#10Q", this).hasClass("btn-warning") ) { 
							Prod_Quantity = Prod_Quantity * 0.95;
						}
					}
										
					//фермы
					if ( $("#ResFQ", this).val() ) 
					{ 
						Prod_Quantity2 = Prod_Quantity / 52;
						$("#Prod_Quantity2", this).text( commaSeparateNumber( Math.round (Prod_Quantity2) ) + " ед. / нед." );
					}

			$("#Prod_Quantity", this).text( commaSeparateNumber( Math.round (Prod_Quantity) ) + " ед." );			
			
			//объем 2ой выпускаемой продукции
			if ( $("#Bonus2", this).val() ) 
			{
				var Prod_Quantity2 = work_quant * prodbase_quan2 * Math.pow(1.05, tech-1) *  eff;
				$("#Prod_Quantity2", this).text( commaSeparateNumber( Math.round (Prod_Quantity2) ) + " ед." );		
			}
			
			//итоговое качество ингридиентов

			var IngTotalQual = 0;
			var IngTotalQty = 0;
			for (var i = 0; i < num; i++) {
				IngTotalQual+= ingQual[i]*ingBaseQty[i];
				IngTotalQty += ingBaseQty[i];
			};
			IngTotalQual = IngTotalQual/IngTotalQty*eff;	

			//ферма
			if ( $("#animal_Quality", this).val() ) IngTotalQual = ( ingQual[0] * 0.3 + animal_Qual * 0.7 ) * eff;	

			//качество товара
			var ProdQual = Math.pow(IngTotalQual, 0.5) * Math.pow(tech, 0.65);
					//шахты
					if ( $("#ResQ", this).val() ) { 
						ProdQual = Math.pow(tech, 0.65) * $("#ResQ", this).val() * eff; 
					}
					//фермы
					if ( $("#ResFQ", this).val() ) { 
						ProdQual = Math.pow(tech, 0.65) * Math.pow($("#ResFQ", this).val(), 0.5) * eff; 
					}					

			//ограничение качества (по технологии)
			if (ProdQual > Math.pow(tech, 1.3) ) {ProdQual = Math.pow(tech, 1.3)}
			if ( ProdQual < 1 ) { ProdQual = 1 }	

			//бонус к качеству
			ProdQual = ProdQual * ( 1 + $("#Bonus", this).val().replace('%', '') / 100 );
			$("#ProdQual", this).text( ProdQual.toFixed(2) ) ;
			
			//если есть второй продукт производства
			if ( $("#Bonus2", this).val() ) 
			{
				var ProdQual2 = Math.pow(IngTotalQual, 0.5) * Math.pow(tech, 0.65);
				if (ProdQual2 > Math.pow(tech, 1.3) ) {ProdQual2 = Math.pow(tech, 1.3)}
				if ( ProdQual2 < 1 ) { ProdQual2 = 1 }
				ProdQual2 = ProdQual2 * ( 1 + $("#Bonus2", this).val().replace('%', '') / 100 );			
				$(this).find("#ProdQual2").text( ProdQual2.toFixed(2) ) ;
			}
			
			//себестоимость
			var zp = work_salary * work_quant;
			var exps = IngTotalCost + zp * 1.1 ;
			if ($("#ResFQ", this).val()) exps*=52; 
			if (envdTax > 1) {
				$("#Cost", this).text( "$" + commaSeparateNumber((exps / Prod_Quantity).toFixed(2)) + " ($" +commaSeparateNumber(((exps / Prod_Quantity)*envdTax).toFixed(2))+ ")" );
				if ( $("#Bonus2", this).val() ) 
				{
					$("#Cost", this).text( "$" + commaSeparateNumber((exps / Prod_Quantity / 2).toFixed(2))+ " ($" +commaSeparateNumber(((exps / Prod_Quantity/ 2)*envdTax).toFixed(2))+ ")" );			
					$("#Cost2", this).text( "$" + commaSeparateNumber((exps / Prod_Quantity2 / 2).toFixed(2))+ " ($" +commaSeparateNumber(((exps / Prod_Quantity2/ 2)*envdTax).toFixed(2))+ ")" );
				}
			} else {
				$("#Cost", this).text( "$" + commaSeparateNumber((exps / Prod_Quantity).toFixed(2)));
				if ( $("#Bonus2", this).val() ) 
				{
					$("#Cost", this).text( "$" + commaSeparateNumber((exps / Prod_Quantity / 2 ).toFixed(2)));			
					$("#Cost2", this).text( "$" + commaSeparateNumber((exps / Prod_Quantity2 / 2 ).toFixed(2)));
				}				
			}
			
			//прибыль
			var profit = ( Sale_Price * Prod_Quantity ) - exps;
			$("#profit", this).text( "$" + commaSeparateNumber(profit.toFixed(2)) );
					//фермы
					if ( $("#ResFQ", this).val() ) { $("#profit1", this).text( "$" + commaSeparateNumber( (profit / 52).toFixed(2) ) ) }
			
			if ( $("#Bonus2", this).val() ) 
			{
				var profit = ( Sale_Price * Prod_Quantity + Sale_Price2 * Prod_Quantity2 ) - exps;
				$("#profit", this).text( "$" + commaSeparateNumber(profit.toFixed(2)) );
			}	
			
			//подсветка прибыли
			$("#profit", this).removeClass("label-danger").removeClass("label-success");
			if (profit > 0) 
			{
				$("#profit", this).addClass("label-success");
			}
			else
			{
				$("#profit", this).addClass("label-danger");
			}

			//доля ингридиентов в расходах
			if ( $("#animal_Quantity", this).text() ) return;

			for (var i = 0; i < num; i++) {
				ingCost[i] = ingTotalPrice[i] / IngTotalCost * 100;
			};
						
			$("div[id^='ingWidth']", this).each(function(index){
				$(this).width(ingCost[index] + "%");
			});
		} else {
			$(this).find("#techDiv").addClass("has-error");
		};
	}
);
