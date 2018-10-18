function my()
{
	
	var data = ' {"il" : [{"name": "Adana", "country": "TR"}, {"name": "Adiyaman", "country": "TR"}, {"name": "Afyonkarahisar", "country": "TR"}, {"name": "Agri", "country": "TR"}, {"name": "Amasya", "country": "TR"}, {"name": "Ankara", "country": "TR"}, {"name": "Antalya","country": "TR"}, {"name": "Artvin","country": "TR"}, {"name": "Aydin","country": "TR"}, {"name": "Balikesir","country": "TR"}, {"name": "Bilecik","country": "TR"}, {"name": "Bingol", "country": "TR"}, {"name": "Bitlis", "country": "TR"}, {"name": "Bolu", "country": "TR"}, {"name": "Burdur", "country": "TR"}, {"name": "Bursa", "country": "TR"}, {"name": "Canakkale", "country": "TR"}, {"name": "Cankiri", "country": "TR"}, {"name": "Corum", "country": "TR"}, {"name": "Denizli", "country": "TR"}, {"name": "Diyarbakir", "country": "TR"}, {"name": "Edirne", "country": "TR"}, {"name": "Elazig", "country": "TR"}, {"name": "Erzincan", "country": "TR"}, {"name": "Erzurum", "country": "TR"}, {"name": "Eskisehir", "country": "TR"}, {"name": "Gaziantep", "country": "TR"}, {"name": "Giresun", "country": "TR"}, {"name": "Gumushane", "country": "TR"}, {"name": "Hakkari", "country": "TR"}, {"name": "Hatay", "country": "TR"}, {"name": "Isparta", "country": "TR"}, {"name": "Mersin", "country": "TR"}, {"name": "Istanbul", "country": "TR"}, {"name": "Izmir", "country": "TR"}, {"name": "Kars", "country": "TR"}, {"name": "Kastamonu", "country": "TR"}, {"name": "Kayseri", "country": "TR"}, {"name": "Kirklareli", "country": "TR"}, {"name": "Kirsehir", "country": "TR"}, {"name": "Kocaeli", "country": "TR"}, {"name": "Konya", "country": "TR"}, { "name": "Kutahya","country": "TR"}, {"name": "Malatya", "country": "TR"}, {"name": "Manisa", "country": "TR"}, { "name": "Kahramanmaras", "country": "TR"}, {"name": "Mardin", "country": "TR"}, {"name": "Mugla", "country": "TR"}, {"name": "Mus", "country": "TR"}, {"name": "Nevsehir", "country": "TR"}, {"name": "Nigde", "country": "TR"}, {"name": "Ordu", "country": "TR"}, {"name": "Rize", "country": "TR"}, {"name": "Sakarya", "country": "TR"}, {"name": "Samsun", "country": "TR"}, {"name": "Siirt", "country": "TR"}, {"name": "Sinop", "country": "TR"}, {"name": "Sivas", "country": "TR"}, {"name": "Tekirdag", "country": "TR"}, {"name": "Tokat", "country": "TR"}, {"name": "Trabzon",  "country": "TR"}, {"name": "Tunceli", "country": "TR"}, {"name": "Sanliurfa", "country": "TR"}, {"name": "Usak", "country": "TR"}, {"name": "Van", "country": "TR"}, {"name": "Yozgat", "country": "TR"}, {"name": "Zonguldak", "country": "TR"}, {"name": "Aksaray", "country": "TR"}, {"name": "Bayburt", "country": "TR"}, {"name": "Karaman", "country": "TR"}, {"name": "Kirikkale", "country": "TR"}, {"name": "Batman", "country": "TR"}, {"name": "Sirnak", "country": "TR"}, {"name": "Bartin", "country": "TR"}, {"name": "Ardahan", "country": "TR"}, {"name": "Igdir", "country": "TR"}, {"name": "Yalova", "country": "TR"}, {"name": "Karabuk", "country": "TR"}, {"name": "Kilis", "country": "TR"}, {"name": "Osmaniye", "country": "TR"}, {"name": "Duzce", "country": "TR"}] }';

	var select = document.getElementById("sehir");
	var obj = JSON.parse(data);

	for (var i=0; i < obj.il.length; i++)
	{
	  var option = document.createElement("option");
	  option.value = obj.il[i].name;
	  option.innerHTML = obj.il[i].name;
	  select.appendChild(option);
	}

}
