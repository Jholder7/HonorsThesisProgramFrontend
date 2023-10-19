import React, {useState} from "react";
import "./OptionTabs.css"
import ToggleButton from "./ToggleButton"

function OptionTabs() {

    const [tab, setTab] = useState(0)

    //TODO: make the elements hidden don't un render them to keep their state persistent (useLocalStorage then passe to each button to implement with)
    return (
        <div className="optionsTab">
            <header>
                <link rel="stylesheet" href="OptionTabs.css" />
            </header>
            <section className="tabSelectBar">
                <button onClick={() => {setTab(0)}} className={`tab ${tab === 0 ? 'selectedTab' : ''}`} style={{"margin-left": "5px"}}>
                    <h1 className="tabTitle">Brace Style</h1>
                </button>
                <button onClick={() => {setTab(1)}} className={`tab ${tab === 1 ? 'selectedTab' : ''}`}>
                    <h1 className="tabTitle">Brace Options</h1>
                </button>
                <button onClick={() => {setTab(2)}} className={`tab ${tab === 2 ? 'selectedTab' : ''}`}>
                    <h1 className="tabTitle">Tab Options</h1>
                </button>
                <button onClick={() => {setTab(3)}} className={`tab ${tab === 3 ? 'selectedTab' : ''}`}>
                    <h1 className="tabTitle">Formatting Options</h1>
                </button>
                <button onClick={() => {setTab(4)}} className={`tab ${tab === 4 ? 'selectedTab' : ''}`}>
                    <h1 className="tabTitle">Indentation Options</h1>
                </button>
                <button onClick={() => {setTab(5)}} className={`tab ${tab === 5 ? 'selectedTab' : ''}`}>
                    <h1 className="tabTitle">Padding Options</h1>
                </button>
                <button onClick={() => {setTab(6)}} className={`tab ${tab === 6 ? 'selectedTab' : ''}`}>
                    <h1 className="tabTitle">Object C Options</h1>
                </button>
            </section>
            {getSettingsPage(tab)}
        </div>
    );

    function tabOptions(){
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Brace Attachment Options</h1>
                <div className="settings">
                    <ToggleButton title="Attach Namespace" initialState={false} preview={"namespace FooName {\r\n...\r\n}"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Attach Classes" initialState={false} preview={"class FooClass {\n...\n};"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Attach Inlnes" initialState={false} preview={"class FooClass\n{\n    void Foo() {\n    ...\n    }\n};"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Attach Closing While" initialState={false} preview={"do\n{\n    bar();\n    ++x;\n} while x == 1;"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
            </div>
        );
    }

    function braceOptions(){
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Tab indentation Options</h1>
                <div className="settings">
                    <ToggleButton title="With Spaces" initialState={false} preview={"void Foo() {\n....if (isBar1\n............&& isBar2)\n........bar();\n}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="With Tabs" initialState={false} preview={"void Foo() {\n>   if (isBar1\n>   ........&& isBar2)\n>   >   bar();\n}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Force Tabs" initialState={false} preview={"void Foo() {\n>   if (isBar1\n>   >   >   && isBar2)\n>   >   bar();\n}"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Variable Tab Options</h1>
                <div className="settings">
                    <ToggleButton title="Force Tabs #" initialState={false} preview={"//Support coming soon"} language="csharp" supportedLanguages="Unsupported"/>
                </div>
            </div>
        );
    }

    function braceStyle(){
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Standard Brace Style Options</h1>
                <div className="settings">
                    <ToggleButton title="Allman Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar)\n" +
                        "    {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="Java Style" initialState={false} preview={"int Foo(bool isBar) {\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="Kernighan & Ritchie Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="Stroustrup Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="Whitesmith Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "    {\n" +
                        "    if (isBar)\n" +
                        "        {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "        }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "    }"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="VTK (Visualization Toolkit) Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar)\n" +
                        "        {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "        }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="Ratliff Style" initialState={false} preview={"int Foo(bool isBar) {\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "        }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "    }"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="GNU Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar)\n" +
                        "        {\n" +
                        "            bar();\n" +
                        "            return 1;\n" +
                        "        }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="Linux Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "        if (isFoo) {\n" +
                        "                bar();\n" +
                        "                return 1;\n" +
                        "        } else\n" +
                        "                return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="Horstmann Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "{   if (isBar)\n" +
                        "    {   bar();\n" +
                        "        return 1;\n" +
                        "    }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="One True Brace Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isFoo) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else {\n" +
                        "        return 0;\n" +
                        "    }\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="Google Style" initialState={false} preview={"int Foo(bool isBar) {\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="Mozilla Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="WebKit Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="Pico Style" initialState={false} preview={"int Foo(bool isBar)\n" +
                        "{   if (isBar)\n" +
                        "    {   bar();\n" +
                        "        return 1; }\n" +
                        "    else\n" +
                        "        return 0; }"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                    <ToggleButton title="Lisp Style" initialState={false} preview={"int Foo(bool isBar) {\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1; }\n" +
                        "    else\n" +
                        "        return 0; }"} language="csharp"
                                  supportedLanguages="Java, C#" onClick={() => {console.log("called")}}/>
                </div>
            </div>
        );
    }

    function formattingOptions(){
        //TODO: Add "becomes" to this area to better explain converting process
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Breaking Options</h1>
                <div className="settings">
                    <ToggleButton title="Break Closing Braces" initialState={false} preview={"void Foo(bool isFoo) {\n" +
                        "    if (isFoo) {\n" +
                        "        bar();\n" +
                        "    }\n" +
                        "    else {\n" +
                        "        anotherBar();\n" +
                        "    }\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Break Elseif" initialState={false} preview={"if (isFoo) {\n" +
                        "    bar();\n" +
                        "}\n" +
                        "else\n" +
                        "    if (isFoo1()) {\n" +
                        "        bar1();\n" +
                        "    }\n" +
                        "    else\n" +
                        "        if (isFoo2()) {\n" +
                        "            bar2();\n" +
                        "        }"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Break One Line Headers" initialState={false} preview={"void Foo(bool isFoo)\n" +
                        "{\n" +
                        "    if (isFoo1)\n" +
                        "        bar1();\n" +
                        "\n" +
                        "    if (isFoo2) {\n" +
                        "        bar2();\n" +
                        "    }\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Break Return Type" initialState={false} preview={"void\n" +
                        "Foo(bool isFoo);"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Break After Logical" initialState={false} preview={"if (thisVariable1 == thatVariable1 ||\n" +
                        "        thisVariable2 == thatVariable2 ||\n" +
                        "        thisVariable3 == thatVariable3)\n" +
                        "    bar();"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Additive Options</h1>
                <div className="settings">
                    <ToggleButton title="Add Braces" initialState={false} preview={"if (isFoo) {\n" +
                        "    isFoo = false;\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Add One Line Braces" initialState={false} preview={"if (isFoo)\n" +
                        "    { isFoo = false; }"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Removal Options</h1>
                <div className="settings">
                    <ToggleButton title="Remove Braces" initialState={false} preview={"if (isFoo)\n" +
                        "    isFoo = false;"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Remove Comment Prefix" initialState={false} preview={"/*\n" +
                        "    comment line 1\n" +
                        "    comment line 2\n" +
                        "*/"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Single Line Options</h1>
                <div className="settings">
                    <ToggleButton title="Keep One Line Blocks" initialState={false} preview={"if (isFoo)\n" +
                        "{ isFoo = false; cout << isFoo << endl; }"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Keep One Line Statements" initialState={false} preview={"if (isFoo)\n" +
                        "{\n" +
                        "    isFoo = false; cout << isFoo << endl;\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Misc. Options</h1>
                <div className="settings">
                    <ToggleButton title="Convert Tabs (To Spaces)" initialState={false} preview={"//Just converts all tabs to spaces"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Close Templates" initialState={false} preview={"Stack< int, List< int > > stack1;\n\n//Becomes:\nStack< int, List< int >> stack1;"} language="csharp" supportedLanguages="C++"/>
                    <ToggleButton title="Attach Return Type" initialState={false} preview={"void Foo(bool isFoo);"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
            </div>
        );
    }

    function indentationOptions(){
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Indentation Options</h1>
                <div className="settings">
                    <ToggleButton title="Indent Classes" initialState={false} preview={"class Foo\n" +
                        "{\n" +
                        "    public:\n" +
                        "        Foo();\n" +
                        "        virtual ~Foo();\n" +
                        "};"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Indent Modifiers" initialState={false} preview={"class Foo\n" +
                        "{\n" +
                        "  public:\n" +
                        "    Foo();\n" +
                        "    virtual ~Foo();\n" +
                        "};"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Indent Switches" initialState={false} preview={"switch (foo)\n" +
                        "{\n" +
                        "    case 1:\n" +
                        "        a += 1;\n" +
                        "        break;\n" +
                        "\n" +
                        "    case 2:\n" +
                        "    {\n" +
                        "        a += 2;\n" +
                        "        break;\n" +
                        "    }\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Indent Cases" initialState={false} preview={"switch (foo)\n" +
                        "{\n" +
                        "    case 1:\n" +
                        "        a += 1;\n" +
                        "        break;\n" +
                        "\n" +
                        "    case 2:\n" +
                        "        {\n" +
                        "            a += 2;\n" +
                        "            break;\n" +
                        "        }\n" +
                        "}"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Indent Namespaces" initialState={false} preview={"namespace foospace\n" +
                        "{\n" +
                        "    class Foo\n" +
                        "    {\n" +
                        "        public:\n" +
                        "            Foo();\n" +
                        "            virtual ~Foo();\n" +
                        "    };\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Indent After Parens" initialState={false} preview={"void Foo(bool bar1,\n" +
                        "    bool bar2)\n" +
                        "{\n" +
                        "    isLongFunction(bar1,\n" +
                        "        bar2);\n" +
                        "\n" +
                        "    isLongVariable = foo1\n" +
                        "        || foo2;\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Indent Labels" initialState={false} preview={"void Foo() {\n" +
                        "    while (isFoo) {\n" +
                        "        if (isFoo)\n" +
                        "            goto error;\n" +
                        "        ...\n" +
                        "    error:\n" +
                        "        ...\n" +
                        "        }\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Indent Preproc Block" initialState={false} preview={"#ifdef _WIN32\n" +
                        "    #include <windows.h>\n" +
                        "    #ifndef NO_EXPORT\n" +
                        "        #define EXPORT\n" +
                        "    #endif\n" +
                        "#endif"} language="csharp" supportedLanguages=""/>
                    <ToggleButton title="Indent Preproc Define" initialState={false} preview={"#define Is_Bar(arg,a,b) \\\n" +
                        "    (Is_Foo((arg), (a)) \\\n" +
                        "     || Is_Foo((arg), (b)))"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Indent Preproc Cond" initialState={false} preview={"        isFoo = true;\n" +
                        "        #ifdef UNICODE\n" +
                        "        text = wideBuff;\n" +
                        "        #else\n" +
                        "        text = buff;\n" +
                        "        #endif"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Indent Col1 Commands" initialState={false} preview={"void Foo()\\n\"\n" +
                        "{\n" +
                        "    // comment\n" +
                        "    if (isFoo)\n" +
                        "        bar();\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton title="Indent Lambda" initialState={false} preview={"void abssort (float* x, unsigned n)\n" +
                        "{\n" +
                        "    std::sort (x, x + n,\n" +
                        "                [] (float a, float b) {\n" +
                        "                    return (std::abs (a) < std::abs (b));\n" +
                        "                }\n" +
                        "               );\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
            </div>
        );
    }

    function paddingOptions(){
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Padding Options</h1>
                <div className="settings">
                    <ToggleButton title="Pad Operators" initialState={false} preview={"if (foo == 2)\n" +
                        "    a = bar((b - c) * a, d--);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Pad Commas" initialState={false} preview={"if (isFoo(a, b))\n" +
                        "    bar(a, b);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Pad Parenthesis" initialState={false} preview={"if ( isFoo ( ( a+2 ), b ) )\n" +
                        "    bar ( a, b );"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Pad Parenthesis Outside" initialState={false} preview={"if (isFoo ( (a+2), b) )\n" +
                        "    bar (a, b);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Pad First Paren Outside" initialState={false} preview={"if (isFoo ((a+2), b))\n" +
                        "    bar (a, b);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Pad Parenthesis Inside" initialState={false} preview={"if ( isFoo( ( a+2 ), b ) )\n" +
                        "    bar( a, b );"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Pad Header" initialState={false} preview={"if (isFoo((a+2), b))\n" +
                        "    bar(a, b);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Unpad Parenthesis" initialState={false} preview={"if(isFoo((a+2), b))\n" +
                        "    bar(a, b);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Pad Empty Parenthesis" initialState={false} preview={"if ( isFoo () )\n" +
                        "    bar( a, b );"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Pad Brackets" initialState={false} preview={"a = b [ a [ 1 ] ];"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="UnPad Brackets" initialState={false} preview={"a = b[a[1]];"} language="csharp" supportedLanguages="C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Break Options</h1>
                <div className="settings">
                    <ToggleButton title="Break Blocks" initialState={false} preview={"isFoo = true;\n" +
                        "\n" +
                        "if (isFoo) {\n" +
                        "    bar();\n" +
                        "} else {\n" +
                        "    anotherBar();\n" +
                        "}\n" +
                        "\n" +
                        "isBar = false;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Break All Blocks" initialState={false} preview={"isFoo = true;\n" +
                        "\n" +
                        "if (isFoo) {\n" +
                        "    bar();\n" +
                        "\n" +
                        "} else {\n" +
                        "    anotherBar();\n" +
                        "}\n" +
                        "\n" +
                        "isBar = false;"} language="csharp" supportedLanguages="C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>White Space Options</h1>
                <div className="settings">
                    <ToggleButton title="Delete Empty Lines" initialState={false} preview={"void Foo()\n" +
                        "{\n" +
                        "    foo1 = 1;\n" +
                        "    foo2 = 2;\n" +
                        "}"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Fill Empty Lines" initialState={false} preview={"//No Preview"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Squeeze Whitespace" initialState={false} preview={"void Foo ()\n" +
                        "{\n" +
                        "    foo1 = 1;\n" +
                        "}"} language="csharp" supportedLanguages="C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Alignment Options</h1>
                <div className="settings">
                    <ToggleButton title="Align Pointer By Type" initialState={false} preview={"char* foo1;\n" +
                        "char& foo2;\n" +
                        "string^ s1;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Align Pointer By Middle" initialState={false} preview={"char * foo1;\n" +
                        "char & foo2;\n" +
                        "string ^ s1;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Align Pointer By Name" initialState={false} preview={"char *foo1;\n" +
                        "char &foo2;\n" +
                        "string ^s1;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Align Refer. By Type" initialState={false} preview={"char& foo1;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Align Refer. By Middle" initialState={false} preview={"char & foo2;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton title="Align Refer. By Name" initialState={false} preview={"char &foo3;"} language="csharp" supportedLanguages="C#"/>
                </div>
            </div>
        );
    }

    function objectCOptions(){
        return (
            <div style={{"margin": "15px"}}>
                If you're using ObjectC you have way bigger issues at hand then style. Just no.
            </div>
        );
    }

    function getSettingsPage(num){
        switch (num) {
            case 0:
                return braceStyle();
                break;
            case 1:
                return tabOptions();
                break;
            case 2:
                return braceOptions();
                break;
            case 3:
                return formattingOptions();
                break;
            case 4:
                return indentationOptions();
                break;
            case 5:
                return paddingOptions();
                break;
            case 6:
                return objectCOptions();
                break;
        }
    }
}

export default OptionTabs;