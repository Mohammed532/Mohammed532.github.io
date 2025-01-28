import { createContext} from "react"

const imageHostURL = 'http://localhost:1337';
const ImageHostContext = createContext(imageHostURL);

export default ImageHostContext;