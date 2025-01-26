import { TypeAnimation } from 'react-type-animation';

const Typed = () => {
    return (
        <TypeAnimation
            sequence={[
                500,
                'Hi I\'m Kevin,',
                100,
                'Hi I\'m Kevin, a fourth year CompSci student',
                300,
                'Hi I\'m Kevin, a fourth year CompSci student at the University of Toronto st.George campus. ',
                200,
                'Hi I\'m Kevin, a fourth year CompSci student at the University of Toronto st.George campus. I like AI and programming languages.'
            ]}
            wrapper="span"
            cursor={true}
            style={{ fontSize: '1em', display: 'inline-block' }}
        />
    );
};

export default Typed;