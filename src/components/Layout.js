import MainHead from './MainHead';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <div>
      <MainHead />
      <div id="wrapper">
        {props.children}
        <Footer />
      </div>
    </div>
  )
}