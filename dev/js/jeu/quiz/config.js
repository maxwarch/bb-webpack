module.exports = {
	type:'quiz',
	questions:[
		{
			t:'1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			props:[
				{t:'p1', v:1, r:true},
				{t:'p2', v:2, r:false},
				{t:'p3', v:3, r:false}
			]
		},
		{
			t:'2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			props:[
				{t:'p1', v:2, r:false},
				{t:'p2', v:3, r:true},
				{t:'p3', v:1, r:false}
			]
		},
		{
			t:'3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			props:[
				{t:'p1', v:3, r:false},
				{t:'p2', v:1, r:false},
				{t:'p3', v:2, r:true}
			]
		}
	]
}