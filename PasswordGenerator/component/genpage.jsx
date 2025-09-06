import { useCallback, useEffect, useRef, useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);

  const paswordRef = useRef();

  const copypassword = ()=>{
    window.navigator.clipboard.writeText(password);
    paswordRef.current.select()
  }

  //useCallback use for the changes done in the property repeatedly and when in need's to be change
  // like jab koi funtion ko bar bar na baane se acha use ak he baar naa do to multipal prop use karsa ke
    const Generator = useCallback(() =>{
    let pas = ""
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(includeNumbers) alpha += "1234567890";
    if(includeSpecial) alpha += `!"#$%&'()*+,-./:;<=>?@[^_`;

    for( let i = 0 ; i <= length ;i++){
        let char = Math.floor(Math.random() * alpha.length)
        //console.log(char)
        console.log(alpha.charAt(char))
        pas += alpha.charAt(char)

    }
    setPassword(pas)
  }, [length,includeNumbers,includeSpecial])

  //useRef is used when a function is run iteratively and change the property which acn be done in useref
  // so does not re-render everything and change only the allowed component

  useEffect(() =>{
        Generator()
  },[length,includeNumbers,includeSpecial])

  return (
    <div className="flex flex-col items-center gap-4 p-6 max-w-md mx-auto shadow-lg rounded-2xl bg-gray-100">
      
      {/* Password Field + Copy Button */}
      <div className="flex w-full">
        <input
          type="text"
          value={password}
          readOnly
          className="flex-1 p-2 border rounded-l-lg"
          placeholder="Generated password"
          ref={paswordRef}      // by using this we can acces the input field any where
        />
        <button 
        onClick={copypassword}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
        >
          Copy
        </button>
      </div>

      {/* Range Selector */}
      <div className="w-full">
        <label className="block mb-1">Password Length: {length}</label>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          className="w-full"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      {/* Checkboxes */}
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeSpecial}
            onChange={(e) => setIncludeSpecial(e.target.checked)}
          />
          Include Special Characters
        </label>
      </div>
    </div>
  );
}
