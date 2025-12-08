import useWindwStore from "@store/window";

const WindowControls = ({target}) => {
    const { closeWindow } = useWindwStore();
  return (
    <div id="window-controls">
        <div className="close" onClick={()=>closeWindow(target)} role="button"/>
        <div className="minimize"></div>
        <div className="maximize"></div>
    </div>
  )
}
export default WindowControls;