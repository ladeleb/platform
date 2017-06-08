var powerText = {};
var whiteBallotText = {};
var confessions = {};
var genderText = {};
var expatText = {};

// *************** MAIN INDEX

// *************** WHITE BALLOTS

whiteBallotText.textEn = {
	// title : 'The <fc>Power</fc> of the <fh>White Ballot</fh>',
	// title: '<span style="font-family: serif !important;font-weight:700;font-size:0.8em"> The power of the </span><br> <span style="font-family:Helvetica Neue;font-weight: 100">W H I T E  .  B A L L O T</span>',
	title: 'Blank and invalid votes',
	desc : 'Blank ballots are ballots cast by voters without a tick for a candidate, political party or coalition list. It wasn\'t until 2008, the new electoral law 25-2008, that the Lebanese parliament recognized the White Ballot as an electoral power and started counting White Ballots. This is why white ballots were not counted in 2005 and were considered back than invalid ballots.',
	select: 'Select a map:',
	attribution: 'Data by Lebanese Association for Democratic Elections',
	content: [
		{
			ttime : '2005',
			time_desc : 'Invalid votes of 2005: 13994 votes'//The white ballot does not have an electoral voice.'
			// need to add map layer
		},
		{
			ttime : '2005',
			time_desc : 'White votes of 2005: Not counted'//The white ballot does not have an electoral voice.'
			// need to add map layer
		},
		{
			ttime : '2009',
			time_desc : 'Invalid votes of 2009: 11390 votes'//The Lebanese government recognizes the white ballot as an electoral voice.'
			// need to add map layer
		},
		{
			ttime : '2009',
			time_desc : 'White votes of 2009: 12522 votes'
		}
	]
};

/* The text content of the page in Arabic */
whiteBallotText.textAr = {
	title : "الاوراق البيضاء والملغاة",
	desc : 'تظهر هذه الخريطة عدد الأوراق البيضاء وعدد الأوراق غير المحتسبة (الملغاة) في كل دائرة انتخابيّة. علما انّه وبحسب القانون الإنتخابي في العام 2005، لم تكن الأصوات البيضاء محصيّة لذا لا تورد ارقامها في الخريطة.',
	select: ":اختر خريطة",
	attribution: 'الجمعية اللبنانية من أجل ديمقراطية الإنتخابات',
	content: [
		{
			ttime : '2005',
			time_desc :  ' الأصوات الملغاة عام 2005: '+'13394'
			// need to add map layer
		},
		{
			ttime : '2005',
			time_desc : 'الأصوات البيضاء عام 2005: '+'غير محتسبة'
		},
		{
			ttime : '2009',
			time_desc : 'الأصوات الملغاة عام 2009: '+'11390'
			// need to add map layer
		},
		{
			ttime : '2009',
			time_desc : 'الأصوات البيضاء عام 2009: '+'12522'
		}

	]
};

// *************** CONFESSION TRENDS
/* The text content of the page in Arabic */
confessions.textEn = {
	// title : 'The <fc>Power</fc> of the <fh>White Ballot</fh>',
	// title: '<span style="font-family: serif !important;font-weight:700;font-size:0.8em"> The power of the </span><br> <span style="font-family:Helvetica Neue;font-weight: 100">W H I T E  .  B A L L O T</span>',
	title: 'Registered voters by confession',
	desc : 'The following map shows the variance between two consecutive parliamentary elections, as well as the no-elections 2013-2017 electoral round, in addition to the 2013, 2014, 2015, 2016 and 2017 voter’s lists  in the total number of the registered voters of each sect per electoral district and their percentages (in respect to the total number of voters in that district). Green indicates an increase in influence, while red indicates a decrease in influence. Yellow represents no or minimal change in influence.',
	attribution: 'Data by Lebanese Association for Democratic Elections',
	confession: "Select a confession",
	year: "Select a year",
    alawite: "Alawite",
    armorth: "Armenian Orthodox",
    armcth: "Armenian Catholic",
    evang: "Evangelical Protestant",
    minorities: "Minorities",
    sunni: "Sunni",
    shia: "Shia",
    maronite: "Maronite",
    druze: "Druze",
    grkorth: "Greek Orthodox",
    grkcth: "Greek Catholic",
};

confessions.textAr = {
	title : 'الناخبون المسجلون بحسب الطائفة',
	desc : ' تظهر هذه الخريطة الفارق في دورتين انتخابيتين نيابيتين متتاليتين 2005 و  2009 ، ودورة 2013-2017 التي لم تجر فيها الانتخابات، إضافة الى المسجلين على لوائح  2013, 2014، 2015، 2016 و2017  بين العدد الاجمالي  للناخبين عن كل طائفة في كل دائرة انتخابية، كما تظهر النسب (بالنسبة لمجمل عدد الناخبين عن هذه الدائرة). اللون الأخضر يشير إلى تزايد تأثير ناخبي هذه الطائفة، في حين أنّ اللون الأحمر يشير إلى انخفاض هذا التأثير. اللون الأصفر يشير الى انه لا تغيير أوتغيير ضئيل في التأثير. ',
	attribution: 'الجمعية اللبنانية من أجل ديمقراطية الإنتخابات',
	confession: ":اختر طائفة",
	year: ":اختر السنة",
	alawite: "علوية",
    armorth: "ارمن ارثوذكس",
    armcth: "ارمن كاثوليك ",
    evang: "بروتستانت ",
    minorities: "اقليات",
    sunni: "سنة",
    shia: "شيعة",
    maronite: "موارنة",
    druze: "دروز",
    grkorth: "روم ارثوذكس",
    grkcth: "روم كاثوليك",
};


// *************** GENDER TRENDS
/* The text content of the page in English */
genderText.textEn = {
	title: 'Voters by Gender',
	desc : 'The following map shows the total number of male and female per electoral district in 2009 in addition to voter’s lists of 2013, 2014, 2015, 2016 and 2017. The percentages of the female and male turnout in 2009 are calculated in comparison to the number of males and females registered on the voter’s lists and not in comparison to the male and female total turnout.',
	attribution: 'Data by Lebanese Association for Democratic Elections',
	select: "Select a map:",
	voter_turnout: "Voter Turnout",
	voter_registration: "Voter Registration",
	f_maj1: "Female majority (0% - 1%)",
    f_maj2: "Female majority (1% - 2%)",
    f_maj3: "Female majority (3% - 5%)",
    f_maj4: "Female majority (> 5%)",
    m_maj1: "Male majority (0% - 1%)",
    m_maj2: "Male majority (> 1%)"
};

genderText.textAr = {
	title : 'الناخبون المسجلون حسب الجنس',
	desc :'تظهر هذه الخريطة العدد الاجمالي للناخبين الذكور والاناث (الناخبين المسجّلين والمقترعين) في كل دائرة انتخابية في انتخابات 2009 اضافة الى المسجّلين على لوائح 2013 و2014 و2015 و 2016  و 2017 . ان نسبة مشاركة الذكور في انتخابات العام 2009 محتسبة مقارنة بعدد الناخبين الذكور المسجلين على القوائم الانتخابية وكذلك نسبة مشاركة الناخبات الاناث وهذه النسب لم تحتسب بالمقارنة مع مجموع المشاركين في العملية الانتخابيّة.',
	attribution: 'الجمعية اللبنانية من أجل ديمقراطية الإنتخابات',
	select: "اختر خريطة",
	voter_turnout: " الناخبين حسب المشاركة ",
	voter_registration: "الناخبين حسب التسجيل",
	f_maj1: "(0% - 1%)" + "اغلبية للاناث",
    f_maj2: "(1% - 2%) " + "اغلبية للاناث",
   	f_maj3: "(3% - 5%) " + "اغلبية للاناث",
    f_maj4: "(> 5%) " + "اغلبية للاناث",
    m_maj1: "(0% - 1%) " + "اغلبية للذكور",
    m_maj2: " (> 1%) " + "اغلبية للذكور"
};

// *************** Vote Power
/* The text content of the page in English */
powerText.textEn = {
	title: 'Vote Power',
	desc : 'This map shows the representation of eligible voters in the parliament. Blue indicates that this electoral district is under represented while red indicates that this electoral district is over represented. <br/>The numbers shown are percentage of registered voters in the district out of total voters in Lebanon compared to percent of seats allocated for that district.',
	attribution: 'Data by Lebanese Association for Democratic Elections',
	select_year: 'Select a year:',

};

powerText.textAr = {
	title : "تمثيل الناخبين في البرلمان" ,
	desc : 'تظهر هذه الخريطة تمثيل كل دائرة انتخابيّة في البرلمان. يتم الحصول على النتيجة من خلال قسمة عدد الناخبين المحتملين في كل دائرة انتخابيّة على كامل عدد الناخبين في كل لبنان وقسمة عدد المقاعد النيابيّة المرصودة لهذه الدائرة الانتخابية على كامل عدد المقاعد النيابيّة في لبنان. يشير اللون الأزرق إلى الدوائر التي يعتبر فيها التمثيل النيابي لهذه الدائرة ضئيلاً، في حين يشير اللون الأحمر إلى الدوائر التي يعتبر فيها التمثيل النيابي لهذه الدائرة مبالغا فيه.',
	attribution: 'الجمعية اللبنانية من أجل ديمقراطية الإنتخابات',
	select_year: ":اختر السنة",

};

expatText.textEn = {
	title: 'Registered Expatriate Lebanese Voters',
	desc : 'The following map shows the total number of the registered voters among Lebanese expatriates in 2017, according to the electoral districts they belong to. The map shows the names of the registred voters, the countries they reside in, alongside their gender, and confession. Green indicates the registred voters among expatriates in a specific district.',
	attribution: 'Data by Lebanese Association for Democratic Elections'

};

expatText.textAr = {
	title : ' الناخبون المسجّلون في بلاد الاغتراب ',
	desc :'تُظهِر هذه الخريطة عدد الناخبين الذين سجّلوا أسماءهم لدى السفارات والقنصليّات في بلدان الاغتراب للعام 2017، بحسب الدوائر الانتخابية التي ينتمون إليها، مع أسمائهم، البلدان التي يتواجدون فيها، نسبة النساء والرجال فيما بينهم، إضافة إلى طوائفهم.  يرمز اللون الأخضر إلى الدوائر  التي تسجل فيها اللبنانيون في الاغتراب .  ',
	attribution: 'الجمعية اللبنانية من أجل ديمقراطية الإنتخابات'
};
