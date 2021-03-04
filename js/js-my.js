//Нужные скрипты "под себя"
//Перед добавлением нового настроить стили!!!


/*<!--  Определение моего возраста
        ======================================================================== -->*/
var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var dob = new Date(2000, 2, 3);
var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
var age;
var txt;

age = today.getFullYear() - dob.getFullYear();

if (today < dobnow)
{
  age = age-1;
}
	
count = age % 100;
if (count >= 5 && count <= 20)
{
	txt = 'лет';
}
else
{
	count = count % 10;
	if (count == 1)
	{
		txt = 'год';
	}
	else if (count >= 2 && count <= 4)
	{
		txt = 'года';
	}
	else
	{
		txt = 'лет';
	}
}

document.write (`${age}` + ' ' + `${txt}`);