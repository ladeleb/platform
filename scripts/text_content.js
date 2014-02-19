var registeredVoters = registeredVoters || {};
var whiteBallotText = {};

// *************** REGISTERED VOTERS 

/* EN */
registeredVoters.contentEn = {
	// title : 'The <fc>Power</fc> of the <fh>White Ballot</fh>',
	// title: '<span style="font-family: serif !important;font-weight:700;font-size:0.8em"> The power of the </span><br> <span style="font-family:Helvetica Neue;font-weight: 100">W H I T E  .  B A L L O T</span>',
	title: 'REGISTERED VOTERS',
	desc : 'The White Ballot symbolizes a strong refusal of the political system and its ruling regime and the electoral law. It doesn’t have a religious confession and is the only constant voice across Lebanon. '
	
};

/* AR */
registeredVoters.contentAr = {
	title : 'قوة <fh>الاقتراع بيضاء</fh>',
	desc : 'الاقتراع الأبيض يرمز إلى رفض قوي من النظام السياسي ونظام الحكم والقانون الانتخابي. أنه ليس لديه اعتراف الدينية وصوت الثابت الوحيد في لبنان.'
};

// *************** WHITE BALLOTS

whiteBallotText.textEn = {
	// title : 'The <fc>Power</fc> of the <fh>White Ballot</fh>',
	// title: '<span style="font-family: serif !important;font-weight:700;font-size:0.8em"> The power of the </span><br> <span style="font-family:Helvetica Neue;font-weight: 100">W H I T E  .  B A L L O T</span>',
	title: 'The Power of the <br> WHITE BALLOT',
	desc : 'The White Ballot symbolizes a strong refusal of the political system and its ruling regime and the electoral law. It wasn\' untill 2009 that the Lebanese Government recognized the White Ballot as a electoral power and started counting White Ballots. ',
	select: 'Select a map:',
	content: [
		{
			ttime : '2005',
			time_desc : 'Invalid votes of 2005'//The white ballot does not have an electoral voice.'
			// need to add map layer
		},
		{
			ttime : '2009',
			time_desc : 'Invalid votes of 2009'//The Lebanese government recognizes the white ballot as an electoral voice.'
			// need to add map layer
		},
		{
			ttime : '2009',
			time_desc : 'White votes of 2009'
		}
	]
};

/* The text content of the page in Arabic */
whiteBallotText.textAr = {
	title : 'قوة <fh>الاقتراع بيضاء</fh>',
	desc : 'الاقتراع الأبيض يرمز إلى رفض قوي من النظام السياسي ونظام الحكم والقانون الانتخابي. أنه ليس لديه اعتراف الدينية وصوت الثابت الوحيد في لبنان.',
	select: 'Select a map:',
	content: [
		{
			ttime : '2005',
			time_desc : 'Invalid votes of 2005'
			// need to add map layer
		},
		{
			ttime : '2009',
			time_desc : 'Invalid votes of 2009'
			// need to add map layer
		},
		{
			ttime : '2009',
			time_desc : 'White votes of 2009'
		}

	]
};
