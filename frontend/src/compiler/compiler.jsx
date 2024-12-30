import React, { useState, useTransition } from 'react';
import axios from 'axios';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useEffect } from 'react';
import  compilerDefultCode  from './compilerDefultCode';


const OnlineCompiler = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [outputError, setOutputError] = useState('');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setCode(compilerDefultCode[language]);
  }, [language]);


  const handleCompile = async () => {
    startTransition(async () => {
        setOutputError('');
        setOutput('');
      try {
        const response = await axios.post('http://localhost:8080/compile/cpp', {
          code,
          language,
          input,
        });
        setOutput(response.data.output);
      } catch (error) {
        setOutputError(error.response?.data?.message || 'Compiler Error');
      }
    });
  };

  return (
  
    <div className="container-fluid p-5">
        <div style={{ margin: '10px 0' }}>
            <label>Choose Language: </label> 
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="cpp">C/C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            </select>
        </div>
      <div className="row " style={{ height: '60vh' }}>
        <div className="col-md-6 bg-dark text-light">
            <h5 className="mt-3">Code Section</h5>
            <CodeEditor value={code} language={language === 'python' ? 'python' : language === 'cpp' ? 'cpp' : 'java'}
            placeholder="Write your code here..."
            onChange={(e) => setCode(e.target.value)}
            padding={20}
            style={{
            margin: '20px 0', fontSize: 14, backgroundColor: '#0c0705',
              fontFamily: 'ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
                }}
            />
            <div className="bg-dark text-light text-center p-3">
                <button className="btn btn-primary" onClick={handleCompile} style={{ marginTop: '10px' }}>
                    {isPending ? 'Running...' : 'Run Code'} 
                </button>
            </div>
        </div>

        <div className="col-md-6 d-flex flex-column">
          <div className="flex-grow-1 bg-dark text-light p-3">
            <h5>Input</h5>
            <textarea
              className="form-control bg-secondary text-light h-90"
             value={input}
              onChange={(e) => setInput(e.target.value)} style={{ height: "150px" }}
            ></textarea>
          </div>
          <div className="flex-grow-1 bg-dark text-light p-3">
            <h5>Output</h5>
            {outputError ? (
                <div className="alert alert-danger">{outputError}</div>
            ) : (
                <textarea
                className="form-control bg-secondary text-dark h-90"
                value={output}
                readOnly
                style={{ height: '150px' }}
                ></textarea>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCompiler;