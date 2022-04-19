import Poniva from '../img/photos/Poniva2.jpg';
import kokoshnik from '../img/photos/kokoshnik.jpg';
import rubaha from '../img/photos/rubaha.webp';

const initialState = {
	slidesList: [
		{
			image: Poniva,
			title: 'Понёва',
			text: ' – юбка из шерсти, состоящая из 3 и более тканевых кусков. Характеризуется богатой расцветкой, украшенным подолом. Юбка закреплялась на талии посредством шерстяного шнурка (гашника) и оборачивалась вокруг бедер. Понёва носилась женщинами, достигшими замужнего возраста. Нередко она выступала в качестве элемента свадебного наряда.',
		},
		{
			image: kokoshnik,
			title: 'кокошник',
			text: ' — так назывался старинный головной убор. Делали его в форме веера, полумесяца. В разных диалектах использовались другие названия русско народных кокошников: златоглав, головка, наклонник, наклонка, кокошка, кокуй, шеломок, ряска. Кокошник являлся частью праздничного наряда, поэтому дома его не носили. Изготовление этих красивых головных уборов заказывали мастерицам-кокошницам, умевшим обращаться с дорогими тканями фабричного производства и вышивать золотом и серебром.',
		},
		{
			image: rubaha,
			title: 'Рубаха',
			text: ' длиной до щиколоток — главный элемент русского костюма. Составная или цельнокроеная, из хлопка, льна, шелка, кисеи или простая холщовая. Подол, рукава и ворот рубах, а иногда и нагрудную часть украшали вышивкой, тесьмой, узорами. Цвета и орнаменты различались в зависимости от области и губернии. Рубахи надевали разные в зависимости от того, какую работу предстояло выполнить. Были рубахи «покосные», «пожнивные», была и «рыболовка». Интересно, что рабочую рубаху для жатвы всегда богато украшали, она приравнивалась к праздничной.',
		},
	],
};

export const clothes = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
