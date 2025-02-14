import { useState, useEffect } from 'react';

interface UseTextScrambleProps {
    finalText: string;
    scrambleSpeed?: number;
}

const useTextScramble = ({ 
    finalText, 
    scrambleSpeed = 50
}: UseTextScrambleProps): string => {
    const [text, setText] = useState<string>('');
    const SCRAMBLE_CHARACTERS = '!@#$%^&*()_+-=[]{}|;:,.<>?/abcdefghijklmnopqrstuvwxyz';

    useEffect(() => {
        const charStates = Array.from(finalText).map(() => ({
            iterations: Math.floor(Math.random() * 11) + 10, // Random number between 10-20
            currentIteration: 0,
            complete: false
        }));

        let intervalId: NodeJS.Timeout;

        const scramble = () => {
            let allComplete = true;

            const newText = Array.from(finalText).map((char, index) => {
                if (!charStates[index].complete) {
                    allComplete = false;
                    charStates[index].currentIteration++;
                    
                    if (charStates[index].currentIteration >= charStates[index].iterations) {
                        charStates[index].complete = true;
                        return finalText[index];
                    }
                    
                    return SCRAMBLE_CHARACTERS[Math.floor(Math.random() * SCRAMBLE_CHARACTERS.length)];
                }
                return finalText[index];
            }).join('');

            setText(newText);

            if (allComplete) {
                clearInterval(intervalId);
            }
        };

        intervalId = setInterval(scramble, scrambleSpeed);
        return () => clearInterval(intervalId);
    }, [finalText, scrambleSpeed]);

    return text;
};

export default useTextScramble;