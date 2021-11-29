import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation/mutation-types'
import { getData } from '../utils/index'
import { account } from './modules/index'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: () => ({
    count1: 0
  }),
  mutations: {
    //同命名空间mutations会调用相同的方法
    increment1(state) {
      // 这里的 `state` 对象是模块的局部状态
      console.log('怎么调到这里来了')
      state.count1++
    }
  },
  getters: {
    doubleCount(state) {
      return state.count1 * 2
    }
  }
}

const store = new Vuex.Store({
  //保存所有数据，以对象的方式导出
  state: {
    desc: "Vuex是状态管理",
    count: 0,
    todos: [
      { id: '1', text: "ceshi", done: false },
      { id: '1', text: "ceshi", done: true },
      { id: '1', text: "ceshi", done: false }
    ],
    numbers: [
      '1', '2', ['3', '4'], ['5', ['6']]
    ],
    obj: {
      id: '111',
      name: 'jsin'
    },
    tree: [{
      id: '1',
      name: '',
      child: [
        {
          id: '2',
          name: '',
          child: []
        }, {
          id: '3',
          name: '',
          child: [
            {
              id: '4',
              name: '',
              child: []
            }
          ]
        }
      ]
    }]
  },
  //state派生属性
  getters: {
    donetodos: state => {
      //数组过滤
      //return state.todos.filter(todo => todo.true)
      return state.todos.map(todo => {
        return Object.assign(todo, { name: `sunxiong${todo.id}` });
      })
    }
  },
  //保存所有方法，用来改变state的数据
  mutations: {
    increment: (state, payload) => {
      state.desc = 'Vuex是状态管理,我说的——' + payload.name;
    },
    convert: (state) => {
      //数组扁平化
      //state.numbers = state.numbers.join().split(',');
      state.numbers = state.numbers.flat(Infinity);
    },
    property: (state) => {
      //以新对象替换老对象。例如，利用对象展开运算符
      state.obj = { ...state.obj, age: 27 }
    },
    //常量
    [SOME_MUTATION](state) {
      // mutate state
      const tree = state.tree;
      getData(tree);
      //深拷贝
      state.tree = [...getData(tree)];
      console.log(state.tree);
    }
  },
  //暴露给用户使用，借此触发mutations中的方法，保存数据（可执行异步操作）
  actions: {
    convert({ commit }) {
      commit('convert');
    },
    //异步
    async actionA({ commit }) {
      commit('property', await convert())
    },
    actionB({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SOME_MUTATION');
      })
    }
  },
  modules: {
    moduleA,
    account
  }
})

export default store
