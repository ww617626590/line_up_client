// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";


//引入Result组件
import Result from "../pages/Result";
//引入DataManagement组件
import DataManagement from "../pages/DataManagement"
//引入Calculation组件
import Calculation from "../pages/Calculation";
//引入Register注册组件
import Register from "../components/Register"
//引入Home注册组件
import Tables from "../components/Tables";
import login from "../components/login";
//创建并暴露一个路由
export default new VueRouter({
        //一堆路由，访问的哪个地址就展示哪个组件
        routes:[
            {
                path:'/',
                name:'login',
                component:login
            }
            ,
            {
                path:'/DataManagement',
                component:DataManagement,
                // children:[  //通过children配置子集路由
                //     {
                //         path:'/Calculation',
                //         component:login
                //     }
                // ]
            },
            {
                path:'/Result',
                component:Result
            },
            {
                path:'/Calculation',
                component:Calculation
            },
            {
                path:'/Register',
                name:'Register',
                component:Register,
            },
            {
                path:'/Tables',
                name:'Tables',
                component:Tables,
            }
        ]
})