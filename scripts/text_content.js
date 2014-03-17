var powerText = {};
var whiteBallotText = {};
var confessions = {};
var genderText = {};

// *************** MAIN INDEX

// *************** WHITE BALLOTS

whiteBallotText.textEn = {
	// title : 'The <fc>Power</fc> of the <fh>White Ballot</fh>',
	// title: '<span style="font-family: serif !important;font-weight:700;font-size:0.8em"> The power of the </span><br> <span style="font-family:Helvetica Neue;font-weight: 100">W H I T E  .  B A L L O T</span>',
	title: 'The Power of the <br> WHITE BALLOT',
	desc : 'The White Ballot symbolizes a strong refusal of the political system and its ruling regime and the electoral law. It wasn\'t until 2009 that the Lebanese Government recognized the White Ballot as a electoral power and started counting White Ballots. ',
	select: 'Select a map:',
	attribution: 'Data by Lebanese Association for Democratic Elections',
	content: [
		{
			ttime : '2005',
			time_desc : 'Invalid + White votes of 2005: 13994 votes'//The white ballot does not have an electoral voice.'
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
	title : 'قوة <fh>الاقتراع بيضاء</fh>',
	desc : 'الاقتراع الأبيض يرمز إلى رفض قوي من النظام السياسي ونظام الحكم والقانون الانتخابي. أنه ليس لديه اعتراف الدينية وصوت الثابت الوحيد في لبنان.',
	select: 'Select a map:',
	attribution: 'Data by Lebanese Association for Democratic Elections',
	content: [
		{
			ttime : '2005',
			time_desc : 'Invalid votes of 2005 13994 votes'
			// need to add map layer
		},
		{
			ttime : '2009',
			time_desc : 'Invalid votes of 2009 11390 votes'
			// need to add map layer
		},
		{
			ttime : '2009',
			time_desc : 'White votes of 2009 12522 votes'
		}

	]
};

// *************** CONFESSION TRENDS
/* The text content of the page in Arabic */
confessions.textEn = {
	// title : 'The <fc>Power</fc> of the <fh>White Ballot</fh>',
	// title: '<span style="font-family: serif !important;font-weight:700;font-size:0.8em"> The power of the </span><br> <span style="font-family:Helvetica Neue;font-weight: 100">W H I T E  .  B A L L O T</span>',
	title: 'Registered voters by confession',
	desc : 'The following map shows the variance (between two consecutive parliamentary elections) in the total number of the registered voters of each sect per electoral district and their percentages (in respect to the total number of voters in that district). Green indicates an increase in influence, while red indicates a decrease in influence.',
	attribution: 'Data by Lebanese Association for Democratic Elections'
};

confessions.textAr = {
	title : 'قوة <fh>الاقتراع بيضاء</fh>',
	desc : 'الاقتراع الأبيض يرمز إلى رفض قوي من النظام السياسي ونظام الحكم والقانون الانتخابي. أنه ليس لديه اعتراف الدينية وصوت الثابت الوحيد في لبنان.',
	attribution: 'Data by Lebanese Association for Democratic Elections'
};


// *************** GENDER TRENDS
/* The text content of the page in English */
genderText.textEn = {
	title: 'Voters by Gender',
	desc : 'The following map shows the variance (between two consecutive parliamentary elections) in the total number of male and female per electoral district. Orange indicates that male voters are more than female voters (either in registered voters or Electors), purple indicates that female voters are more than male voters.',
	attribution: 'Data by Lebanese Association for Democratic Elections',
	select: "Select a map:",
	voter_turnout: "Voter Turnout",
	voter_registration: "Voter Registration",
	f_maj1: "Female majority (> 1%)",
    f_maj2: "Female majority (0% - 1%)",
    m_maj1: "Male majority (0% - 1%)",
    m_maj2: "Male majority (> 1%)"
};

genderText.textAr = {
	title : 'قوة <fh>الاقتراع بيضاء</fh>',
	desc : 'الاقتراع الأبيض يرمز إلى رفض قوي من النظام السياسي ونظام الحكم والقانون الانتخابي. أنه ليس لديه اعتراف الدينية وصوت الثابت الوحيد في لبنان.',
	attribution: 'Data by Lebanese Association for Democratic Elections',
	select: "Select a map:",
	voter_turnout: "Voter Turnout",
	voter_registration: "Voter Registration",
	f_maj1: "Female majority (> 1%)",
    f_maj2: "Female majority (0% - 1%)",
    m_maj1: "Male majority (0% - 1%)",
    m_maj2: "Male majority (> 1%)"
};

// *************** Vote Power
/* The text content of the page in English */
powerText.textEn = {
	title: 'Vote Power',
	desc : 'This map shows the representation of eligible voters in the parliament. Blue indicates that this electoral district is under represented while red indicates that this electoral district is over represented.' +
	'<br><br>The numbers shown are percentage of registered voters in the district out of total voters compared to percent of seats allocated for that district.' + 
	'Ideally, 25,000 voters should be represented by one parliamentary member.',
	attribution: 'Data by Lebanese Association for Democratic Elections',
	select: "Select a map:",
	voter_turnout: "Voter Turnout",
	voter_registration: "Voter Registration",
	f_maj1: "Female majority (> 1%)",
    f_maj2: "Female majority (0% - 1%)",
    m_maj1: "Male majority (0% - 1%)",
    m_maj2: "Male majority (> 1%)"
};

powerText.textAr = {
	title : 'قوة <fh>الاقتراع بيضاء</fh>',
	desc : 'الاقتراع الأبيض يرمز إلى رفض قوي من النظام السياسي ونظام الحكم والقانون الانتخابي. أنه ليس لديه اعتراف الدينية وصوت الثابت الوحيد في لبنان.',
	attribution: 'Data by Lebanese Association for Democratic Elections',
	select: "Select a map:",
	voter_turnout: "Voter Turnout",
	voter_registration: "Voter Registration",
	f_maj1: "Female majority (> 1%)",
    f_maj2: "Female majority (0% - 1%)",
    m_maj1: "Male majority (0% - 1%)",
    m_maj2: "Male majority (> 1%)"
};
