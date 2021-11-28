import Test from '../components/test/test.vue'
import TestMark from '../components/test/mark.vue'
import TestTsai from '../components/test/tsai.vue'
import TestJack from '../components/test/jack.vue'


const routes = {
  path: 'test',
  component: Test,
  children:[
    {
      path: 'mark',
      name: 'mark',
      component: TestMark,
      
    },
    {
      path: 'jack',
      name: 'jack',
      component: TestJack,
      
    },
    {
      path: 'tsai',
      name: 'tsai',
      component: TestTsai,
      
    }
  ]
}

const TestPath = [routes]

export default TestPath
