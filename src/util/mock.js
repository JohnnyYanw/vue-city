/**
 * Mock模拟数据
 * date: 2017/12/12
 **/

import Mock from 'mockjs';

const cityData = Mock.mock({
	'city|50': [{
		'cityName': '@city'
	}]
});

export default cityData;