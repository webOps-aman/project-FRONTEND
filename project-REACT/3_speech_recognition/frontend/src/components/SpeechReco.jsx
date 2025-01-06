import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechReco = () => {
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const copyToClipboard = () => {
        if (transcript.trim() === '') {
            alert('No text available to copy!');
            return;
        }
        navigator.clipboard.writeText(transcript)
            .then(() => {
                alert('Text copied to clipboard!');
            })
            .catch((error) => {
                console.error('Failed to copy text:', error);
            });
    };

    if (!browserSupportsSpeechRecognition) {
        return <p>Browser does not support speech recognition.</p>;
    }

    return (
        <>
            <div className='speech-wrapper w-[100%] h-[100vh] bg-[#F4FFC3] flex justify-center items-center'>
                <div className='speech-container w-[90%] sm:w-[500px] h-[600px] sm:h-[500px] bg-[#809D3C] rounded-2xl'>
                    <p className='text-2xl text-white font-bold text-center py-3'>Speech To Text Convertor</p>
{/* -----speech-area start here----- */}
                    <div className='speech-reco-screen w-[92%] h-[45%] sm:h-[70%] bg-[#fff] rounded-2xl mb-5 mx-auto min-h-[100px] overflow-auto'>
                        <p className="text-sm sm:text-lg p-3">{transcript}</p>
                    </div>

                    <div className='button-group w-[92%] mt-8 mx-auto flex flex-col gap-4 sm:flex-row sm:justify-around sm:items-center'>
                        <div className='copy-div w-full sm:w-auto'>
                            <button
                                className='copy-btn rounded-md w-full p-3 bg-[#fff] font-semibold'
                                onClick={copyToClipboard}
                            >
                                Copy To Clipboard
                            </button>
                        </div>
                        <div className='start-listening-div w-full sm:w-auto'>
                            <button
                                className='start-btn rounded-md w-full p-3 bg-[#fff] font-semibold'
                                onClick={startListening}
                            >
                                Start Listening
                            </button>
                        </div>
                        <div className='stop-listening-div w-full sm:w-auto'>
                            <button
                                className='stop-btn rounded-md w-full p-3 bg-[#fff] font-semibold'
                                onClick={SpeechRecognition.stopListening}
                            >
                                Stop Listening
                            </button>
                        </div>
                    </div>
 {/* -----speech-area end here----- */}
                </div>
            </div>
        </>
    );
};

export default SpeechReco;
