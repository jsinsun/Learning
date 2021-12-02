import axios from '../utils/request'

export const GetMenus=()=>{
  return axios({
    method:'GET',
    url:'api/getMenus'
  })
}
