import { TypeAnimation } from 'react-type-animation';
import {useGlobalContext} from "@/app/context";

const Typed = () => {
    const { setFinished } = useGlobalContext();

    return (
        <TypeAnimation
            sequence={[
                500,
                'Hi I\'m Kevin,',
                100,
                'Hi I\'m Kevin, a fourth year CompSci student',
                300,
                'Hi I\'m Kevin, a fourth year CompSci student at University of Toronto, st.George campus. ',
                200,
                'Hi I\'m Kevin, a fourth year CompSci student at University of Toronto, st.George campus. I like AI and programming languages.',
                () => {
                    setFinished(true);
                }
            ]}
            wrapper="span"
            cursor={true}
            style={{ fontSize: '1em', display: 'inline-block' }}
        />
    );
};

export default Typed;