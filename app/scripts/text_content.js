var powerText = {};
var whiteBallotText = {};
var confessions = {};
var genderText = {};

// *************** MAIN INDEX

// *************** WHITE BALLOTS

whiteBallotText.textEn = {
	// title : 'The <fc>Power</fc> of the <fh>White Ballot</fh>',
	// title: '<span style="font-family: serif !important;font-weight:700;font-size:0.8em"> The power of the </span><br> <span style="font-family:Helvetica Neue;font-weight: 100">W H I T E  .  B A L L O T</span>',
	title: 'Blank and invalid votes',
	desc : 'Blank (or white) ballots are ballots cast by voters without choosing a candidate. It wasn\'t until 2009 that the Lebanese Government recognized the White Ballot as a electoral power and started counting White Ballots. ',
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
	desc : ' .تظهر هذه الخريطة عدد الأوراق البيضاء وعدد الأوراق غير المحتسبة (الملغاة) في كل دائرة انتخابيّة بالنسبة لجميع الانتخابات النيابية. والمتفق عليه أن الورقة البيضاء ترمز إلى رفض القانون الانتخابي أو المرشحين. بحسب القانون الإنتخابي في العام 2005، لم تكن الأصوات البيضاء محصيّة',
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
			time_desc : 'الأصوات البيضاء عام 2005: '+'0'
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
	desc : 'The following map shows the variance (between two consecutive parliamentary elections) in the total number of the registered voters of each sect per electoral district and their percentages (in respect to the total number of voters in that district). Green indicates an increase in influence, while red indicates a decrease in influence. Yellow represents no or minimal change in influence.',
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
	title : 'الناخبون المسجلون حسب الطائفة',
	desc : 'تظهر هذه الخريطة الفارق (في دورتين انتخابيتين نيابيتين متتاليتين) بين العدد الجملي  للناخبين عن كل طائفة في كل دائرة انتخابية، كما تظهر النسب (بالنسبة لمجمل  عدد الناخبين عن هذه الدائرة). اللون الأخضر يشير إلى تزايد تأثير ناخبي هذه الطائفة، في حين أنّ اللون الأحمر يشير إلى انخفاض هذا التأثير. اللون الأصفر يشير الى لا تغيير أو تغيير ضئيل في التأثير',
	attribution: 'الجمعية اللبنانية من أجل ديمقراطية الإنتخابات',
	confession: ":اختر طائفة",
	year: ":اختر السنة",
	alawite: "علوية",
    armorth: "ارمن ارثوذكس",
    armcth: "ارمن كاثوليك ",
    evang: "بروتستانتية ",
    minorities: "الأقليات",
    sunni: "سني",
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
	desc : 'The following map shows the total number of male and female per electoral district in 2009. Green indicates that male voters are more than female voters (either in registered voters or Electors), pink indicates that female voters are more than male voters.',
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
	desc :'تظهر هذه الخريطة العدد الاجمالي للناخلين الذكور والاناث ( الناخبين المسجلين والمقترعين) في كل دائرة انتخابية في انتخابات 2009. اللون الأخضر يشير إلى أنّ عدد الذكور أكبر من عدد الإناث (سواء كانوا أعداد الناخبين المسجلين أم المقترعين). اللون الزهري يشير إلى أنّ عدد الإناث أكبر من عدد الذكور',
	attribution: 'الجمعية اللبنانية من أجل ديمقراطية الإنتخابات',
	select: ":اختر خريطة",
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
	desc : 'This map shows the representation of eligible voters in the parliament. Blue indicates that this electoral district is under represented while red indicates that this electoral district is over represented.' +
	'<br><br>The numbers shown are percentage of registered voters in the district out of total voters compared to percent of seats allocated for that district.' + 
	'Ideally, 25,000 voters should be represented by one parliamentary member.',
	attribution: 'Data by Lebanese Association for Democratic Elections',

};

powerText.textAr = {
	title : "تمثيل الناخبين في البرلمان" ,
	desc : ' تظهر هذه الخريطة تمثيل كل دائرة انتخابيّة في البرلمان.يتم الحصول على النتيجة من خلال قسمة عدد الناخبين المحتملين في كل دائرة انتخابيّة على كامل عدد الناخبين في كل لبنان وقسمة عدد المقاعد النيابيّة المرصودة لهذه الدائرة الانتخابية على كامل عدد المقاعد النيابيّة في لبنان  <br><br>. يشير اللون الأزرق إلى الدوائر التي يعتبر فيها التمثيل النيابي لهذه الدائرة ضئيلاً، في حين يشير اللون الأحمر إلى الدوائر التي يعتبر فيها التمثيل النيابي لهذه الدائرة مبالغا فيه',
	attribution: 'الجمعية اللبنانية من أجل ديمقراطية الإنتخابات',

};
