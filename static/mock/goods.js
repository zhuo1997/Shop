import Mock from 'mockjs'
Mock.mock('/goods', /get|post/i, {
    "user|14": [{
          'name': '@cname'
    }],
    "goods|40-50": [
        {
            'goods': '@title(1)'
        }
    ]
})