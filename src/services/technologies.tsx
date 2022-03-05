
import { DiJavascript1, DiHtml5, DiCss3, DiAngularSimple, DiReact, DiNodejs, DiJava, DiPython, DiPhp, DiSwift, DiIonic } from 'react-icons/di'
import { FaVuejs, FaSass } from 'react-icons/fa'
import { SiCsharp, SiElixir, SiKotlin, SiXamarin } from 'react-icons/si'
import { RiFlutterFill } from 'react-icons/ri'
import { AiFillAndroid } from 'react-icons/ai'

export const frontendData = [
  { id: 'zero', name: 'html5', title: 'HTML5', bgColor: '#DD4B25', icon: <DiHtml5 size={32} color='#FFF' /> },
  { id: 'one', name: 'css3', title: 'CSS3', bgColor: '#1A6FB4', icon: <DiCss3 size={32} color='#FFF' /> },
  { id: 'two', name: 'vuejs', title: 'Vue', bgColor: '#65AC7D', icon: <FaVuejs size={32} color='#FFF' /> },
  { id: 'three', name: 'sass', title: 'Sass', bgColor: '#C76494', icon: <FaSass size={32} color='#FFF' /> },
  { id: 'four', name: 'angular', title: 'Angular', bgColor: '#DD2837', icon: <DiAngularSimple size={32} color='#FFF' /> },
  { id: 'five', name: 'react', title: 'React', bgColor: '#5ED3F3', icon: <DiReact size={32} color='#FFF' /> },
  { id: 'six', name: 'javascript', title: 'Javascript', bgColor: '#EFD81D', icon: <DiJavascript1 size={32} color='#FFF' /> }
]

export const backendData = [
  { id: 'zero', name: 'java', title: 'Java', bgColor: '#5382A1', icon: <DiJava size={32} color='#FFF' /> },
  { id: 'one', name: 'go', title: 'Go', bgColor: '#00AED9', icon: <span style={{ color: '#FFF', fontWeight: 600 }}>GO</span> },
  { id: 'two', name: 'csharp', title: 'C#', bgColor: '#903BA7', icon: <SiCsharp size={32} color='#FFF' /> },
  { id: 'three', name: 'python', title: 'Python', bgColor: '#346C99', icon: <DiPython size={32} color='#FFF' /> },
  { id: 'four', name: 'php', title: 'PHP', bgColor: '#7377AD', icon: <DiPhp size={48} color='#FFF' /> },
  { id: 'five', name: 'elixir', title: 'Elixir', bgColor: '#7A6382', icon: <SiElixir size={32} color='#FFF' /> },
  { id: 'six', name: 'nodejs', title: 'Node.JS', bgColor: '#8CBF3D', icon: <DiNodejs size={48} color='#FFF' /> }
]

export const mobileData = [
  { id: 'zero', name: 'flutter', title: 'Flutter', bgColor: '#40A0EE', icon: <RiFlutterFill size={32} color='#FFF' /> },
  { id: 'one', name: 'kotlin', title: 'Kotlin', bgColor: '#1E78D5', icon: <SiKotlin size={24} color='#FFF' /> },
  { id: 'two', name: 'android', title: 'Android', bgColor: '#90BA48', icon: <AiFillAndroid size={24} color='#FFF' /> },
  { id: 'three', name: 'swift', title: 'Swift', bgColor: '#F55833', icon: <DiSwift size={24} color='#FFF' /> },
  { id: 'four', name: 'ionic', title: 'Ionic', bgColor: '#367CF7', icon: <DiIonic size={32} color='#FFF' /> },
  { id: 'five', name: 'xamarin', title: 'Xamarin', bgColor: '#3498DB', icon: <SiXamarin size={24} color='#FFF' /> },
  { id: 'six', name: 'reactNative', title: 'React Native', bgColor: '#5ED3F3', icon: <DiReact size={32} color='#FFF' /> }
]