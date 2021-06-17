import { createApp } from 'vue'
import App from './App.vue'
import { Search } from 'vant';
import { Swipe, SwipeItem,Card,Tabbar, TabbarItem,Field,Button ,Form,TreeSelect,Skeleton,Image as VanImage,Col,Row } from 'vant'
import 'vant/lib/index.css';
import "./assets/style/plgin-less-path.less"
import './assets/font/iconfont.css'
import route from "./router"
const app=createApp(App);
app.use(Search);
app.use(Swipe);
app.use(SwipeItem);
app.use(Card);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Field);
app.use(Button);
app.use(Form)
app.use(route);
app.use(TreeSelect);
app.use(Skeleton);
app.use(Row);
app.use(Col);

app.mount('#app')
