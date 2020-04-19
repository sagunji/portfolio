import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div id="wrapper">
      {props.children}
      <Footer />
    </div>
  )
}