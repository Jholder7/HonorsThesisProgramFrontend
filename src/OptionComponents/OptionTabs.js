import React, {useState, use} from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import "./OptionTabs.css"
import ToggleButton from "./ToggleButton"

function OptionTabs() {

    const [tab, setTab] = useState(0)
    const [settings, saveSettings] = useLocalStorage("settings", [])
    OptionTabs.settings = settings;

    function addSetting(settingKey){
        let tempSettings = settings;
        if (tempSettings.includes(settingKey)) {
            tempSettings.splice(tempSettings.indexOf(settingKey), 1)
        } else {
            tempSettings.push(settingKey)
        }
        saveSettings(tempSettings);
    }

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
                <button style={{"margin-left": "auto"}} onClick={() => {console.log(settings)}}>list</button>
                <button onClick={() => {saveSettings([])}}>clear</button>
            </section>
            {getSettingsPage(tab)}
        </div>
    );

    function tabOptions(){
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Brace Attachment Options</h1>
                <div className="settings">
                    <ToggleButton onClick={() => {addSetting("1AttachNamespace")}} title="Attach Namespace" initialState={settings.includes("1AttachNamespace")} preview={"namespace FooName {\r\n...\r\n}"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("1AttachClasses")}} title="Attach Classes" initialState={settings.includes("1AttachClasses")} preview={"class FooClass {\n...\n};"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("1AttachInline")}} title="Attach Inlines" initialState={settings.includes("1AttachInline")} preview={"class FooClass\n{\n    void Foo() {\n    ...\n    }\n};"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("1AttachClosingWhile")}} title="Attach Closing While" initialState={settings.includes("1AttachClosingWhile")} preview={"do\n{\n    bar();\n    ++x;\n} while x == 1;"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
            </div>
        );
    }

    function braceOptions(){
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Tab indentation Options</h1>
                <div className="settings">
                    <ToggleButton onClick={() => {addSetting("2Spaces")}} title="With Spaces" initialState={settings.includes("2Spaces")} preview={"void Foo() {\n....if (isBar1\n............&& isBar2)\n........bar();\n}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("2Tab")}} title="With Tabs" initialState={settings.includes("2Tab")} preview={"void Foo() {\n>   if (isBar1\n>   ........&& isBar2)\n>   >   bar();\n}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("2ForceTab")}} title="Force Tabs" initialState={settings.includes("2ForceTab")} preview={"void Foo() {\n>   if (isBar1\n>   >   >   && isBar2)\n>   >   bar();\n}"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Variable Tab Options</h1>
                <div className="settings">
                    <ToggleButton onClick={() => {addSetting("2ForceTabx")}} title="Force Tabs #" initialState={settings.includes("2ForceTabsx")} preview={"//Support coming soon"} language="csharp" supportedLanguages="Unsupported"/>
                </div>
            </div>
        );
    }

    function braceStyle(){
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Standard Brace Style Options</h1>
                <div className="settings">
                    <ToggleButton onClick={() => {addSetting("3Allman")}} title="Allman Style" initialState={settings.includes("3Allman")} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar)\n" +
                        "    {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3Java")}} title="Java Style" initialState={settings.includes("3Java")} preview={"int Foo(bool isBar) {\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3KR")}} title="Kernighan & Ritchie Style" initialState={settings.includes("3KR")} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3Stroustrup")}} title="Stroustrup Style" initialState={settings.includes("3Stroustrup")} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3Whitesmith")}} title="Whitesmith Style" initialState={settings.includes("3Whitesmith")} preview={"int Foo(bool isBar)\n" +
                        "    {\n" +
                        "    if (isBar)\n" +
                        "        {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "        }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "    }"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3VTK")}} title="VTK (Visualization Toolkit) Style" initialState={settings.includes("3VTK")} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar)\n" +
                        "        {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "        }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3Ratliff")}} title="Ratliff Style" initialState={settings.includes("3Ratliff")} preview={"int Foo(bool isBar) {\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "        }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "    }"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3GNU")}} title="GNU Style" initialState={settings.includes("3GNU")} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar)\n" +
                        "        {\n" +
                        "            bar();\n" +
                        "            return 1;\n" +
                        "        }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3Linux")}} title="Linux Style" initialState={settings.includes("3Linux")} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "        if (isFoo) {\n" +
                        "                bar();\n" +
                        "                return 1;\n" +
                        "        } else\n" +
                        "                return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3Horstmann")}} title="Horstmann Style" initialState={settings.includes("3Horstmann")} preview={"int Foo(bool isBar)\n" +
                        "{   if (isBar)\n" +
                        "    {   bar();\n" +
                        "        return 1;\n" +
                        "    }\n" +
                        "    else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3OTBS")}} title="One True Brace Style" initialState={settings.includes("3OTBS")} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isFoo) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else {\n" +
                        "        return 0;\n" +
                        "    }\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3Google")}} title="Google Style" initialState={settings.includes("3Google")} preview={"int Foo(bool isBar) {\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3Mozilla")}} title="Mozilla Style" initialState={settings.includes("3Mozilla")} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3WebKit")}} title="WebKit Style" initialState={settings.includes("3WebKit")} preview={"int Foo(bool isBar)\n" +
                        "{\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1;\n" +
                        "    } else\n" +
                        "        return 0;\n" +
                        "}"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3Pico")}} title="Pico Style" initialState={settings.includes("3Pico")} preview={"int Foo(bool isBar)\n" +
                        "{   if (isBar)\n" +
                        "    {   bar();\n" +
                        "        return 1; }\n" +
                        "    else\n" +
                        "        return 0; }"} language="csharp"
                                  supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("3Lisp")}} title="Lisp Style" initialState={settings.includes("3Lisp")} preview={"int Foo(bool isBar) {\n" +
                        "    if (isBar) {\n" +
                        "        bar();\n" +
                        "        return 1; }\n" +
                        "    else\n" +
                        "        return 0; }"} language="csharp"
                                  supportedLanguages="Java, C#"/>
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
                    <ToggleButton onClick={() => {addSetting("4BreakClosingBraces")}} title="Break Closing Braces" initialState={settings.includes("4BreakClosingBraces")} preview={"void Foo(bool isFoo) {\n" +
                        "    if (isFoo) {\n" +
                        "        bar();\n" +
                        "    }\n" +
                        "    else {\n" +
                        "        anotherBar();\n" +
                        "    }\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("4BreakElseifs")}} title="Break Elseif" initialState={settings.includes("4BreakElseifs")} preview={"if (isFoo) {\n" +
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
                    <ToggleButton onClick={() => {addSetting("4BreakOneLineHeaders")}} title="Break One Line Headers" initialState={settings.includes("4BreakOneLineHeaders")} preview={"void Foo(bool isFoo)\n" +
                        "{\n" +
                        "    if (isFoo1)\n" +
                        "        bar1();\n" +
                        "\n" +
                        "    if (isFoo2) {\n" +
                        "        bar2();\n" +
                        "    }\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("4BreakReturnType")}} title="Break Return Type" initialState={settings.includes("4BreakReturnType")} preview={"void\n" +
                        "Foo(bool isFoo);"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("4BreakAfterLogical")}} title="Break After Logical" initialState={settings.includes("4BreakAfterLogical")} preview={"if (thisVariable1 == thatVariable1 ||\n" +
                        "        thisVariable2 == thatVariable2 ||\n" +
                        "        thisVariable3 == thatVariable3)\n" +
                        "    bar();"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Additive Options</h1>
                <div className="settings">
                    <ToggleButton onClick={() => {addSetting("4AddBraces")}} title="Add Braces" initialState={settings.includes("4AddBraces")} preview={"if (isFoo) {\n" +
                        "    isFoo = false;\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("4AddOneLineBraces")}} title="Add One Line Braces" initialState={settings.includes("4AddOneLineBraces")} preview={"if (isFoo)\n" +
                        "    { isFoo = false; }"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Removal Options</h1>
                <div className="settings">
                    <ToggleButton onClick={() => {addSetting("4RemoveBraces")}} title="Remove Braces" initialState={settings.includes("4RemoveBraces")} preview={"if (isFoo)\n" +
                        "    isFoo = false;"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("4RemoveCommentPrefix")}} title="Remove Comment Prefix" initialState={settings.includes("4RemoveCommentPrefix")} preview={"/*\n" +
                        "    comment line 1\n" +
                        "    comment line 2\n" +
                        "*/"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Single Line Options</h1>
                <div className="settings">
                    <ToggleButton onClick={() => {addSetting("4KeepOneLineBlocks")}} title="Keep One Line Blocks" initialState={settings.includes("4KeepOneLineBlocks")} preview={"if (isFoo)\n" +
                        "{ isFoo = false; cout << isFoo << endl; }"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("4KeepOneLineStatements")}} title="Keep One Line Statements" initialState={settings.includes("4KeepOneLineStatements")} preview={"if (isFoo)\n" +
                        "{\n" +
                        "    isFoo = false; cout << isFoo << endl;\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Misc. Options</h1>
                <div className="settings">
                    <ToggleButton onClick={() => {addSetting("4ConvertTabs")}} title="Convert Tabs (To Spaces)" initialState={settings.includes("4ConvertTabs")} preview={"//Just converts all tabs to spaces"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("4CloseTemplates")}} title="Close Templates" initialState={settings.includes("4CloseTemplates")} preview={"Stack< int, List< int > > stack1;\n\n//Becomes:\nStack< int, List< int >> stack1;"} language="csharp" supportedLanguages="C++"/>
                    <ToggleButton onClick={() => {addSetting("4AttachReturnType")}} title="Attach Return Type" initialState={settings.includes("4AttachReturnType")} preview={"void Foo(bool isFoo);"} language="csharp" supportedLanguages="Java, C#"/>
                </div>
            </div>
        );
    }

    function indentationOptions(){
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Indentation Options</h1>
                <div className="settings">
                    <ToggleButton onClick={() => {addSetting("5IndentClasses")}} title="Indent Classes" initialState={settings.includes("5IndentClasses")} preview={"class Foo\n" +
                        "{\n" +
                        "    public:\n" +
                        "        Foo();\n" +
                        "        virtual ~Foo();\n" +
                        "};"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("5IndentModifiers")}} title="Indent Modifiers" initialState={settings.includes("5IndentModifiers")} preview={"class Foo\n" +
                        "{\n" +
                        "  public:\n" +
                        "    Foo();\n" +
                        "    virtual ~Foo();\n" +
                        "};"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("5IndentSwitches")}} title="Indent Switches" initialState={settings.includes("5IndentSwitches")} preview={"switch (foo)\n" +
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
                    <ToggleButton onClick={() => {addSetting("5IndentCases")}} title="Indent Cases" initialState={settings.includes("5IndentCases")} preview={"switch (foo)\n" +
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
                    <ToggleButton onClick={() => {addSetting("5IndentNamespaces")}} title="Indent Namespaces" initialState={settings.includes("5IndentNamespaces")} preview={"namespace foospace\n" +
                        "{\n" +
                        "    class Foo\n" +
                        "    {\n" +
                        "        public:\n" +
                        "            Foo();\n" +
                        "            virtual ~Foo();\n" +
                        "    };\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("5IndentAfterParens")}} title="Indent After Parens" initialState={settings.includes("5IndentAfterParens")} preview={"void Foo(bool bar1,\n" +
                        "    bool bar2)\n" +
                        "{\n" +
                        "    isLongFunction(bar1,\n" +
                        "        bar2);\n" +
                        "\n" +
                        "    isLongVariable = foo1\n" +
                        "        || foo2;\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("5IndentLabels")}} title="Indent Labels" initialState={settings.includes("5IndentLabels")} preview={"void Foo() {\n" +
                        "    while (isFoo) {\n" +
                        "        if (isFoo)\n" +
                        "            goto error;\n" +
                        "        ...\n" +
                        "    error:\n" +
                        "        ...\n" +
                        "        }\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("5IndentPreprocBlock")}} title="Indent Preproc Block" initialState={settings.includes("5IndentPreprocBlock")} preview={"#ifdef _WIN32\n" +
                        "    #include <windows.h>\n" +
                        "    #ifndef NO_EXPORT\n" +
                        "        #define EXPORT\n" +
                        "    #endif\n" +
                        "#endif"} language="csharp" supportedLanguages=""/>
                    <ToggleButton onClick={() => {addSetting("5IndentPreprocDefine")}} title="Indent Preproc Define" initialState={settings.includes("5IndentPreprocDefine")} preview={"#define Is_Bar(arg,a,b) \\\n" +
                        "    (Is_Foo((arg), (a)) \\\n" +
                        "     || Is_Foo((arg), (b)))"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("5IndentPreprocCond")}} title="Indent Preproc Cond" initialState={settings.includes("5IndentPreprocCond")} preview={"        isFoo = true;\n" +
                        "        #ifdef UNICODE\n" +
                        "        text = wideBuff;\n" +
                        "        #else\n" +
                        "        text = buff;\n" +
                        "        #endif"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("5IndentCol1Commands")}} title="Indent Col1 Commands" initialState={settings.includes("5IndentCol1Commands")} preview={"void Foo()\\n\"\n" +
                        "{\n" +
                        "    // comment\n" +
                        "    if (isFoo)\n" +
                        "        bar();\n" +
                        "}"} language="csharp" supportedLanguages="Java, C#"/>
                    <ToggleButton onClick={() => {addSetting("5IndentLambda")}} title="Indent Lambda" initialState={settings.includes("5IndentLambda")} preview={"void abssort (float* x, unsigned n)\n" +
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
                    <ToggleButton onClick={() => {addSetting("6PadOper")}} title="Pad Operators" initialState={settings.includes("6PadOper")} preview={"if (foo == 2)\n" +
                        "    a = bar((b - c) * a, d--);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6PadComma")}} title="Pad Commas" initialState={settings.includes("6PadComma")} preview={"if (isFoo(a, b))\n" +
                        "    bar(a, b);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6PadParenthesis")}} title="Pad Parenthesis" initialState={settings.includes("6PadParenthesis")} preview={"if ( isFoo ( ( a+2 ), b ) )\n" +
                        "    bar ( a, b );"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6PadParenthesisOutside")}} title="Pad Parenthesis Outside" initialState={settings.includes("6PadParenthesisOutside")} preview={"if (isFoo ( (a+2), b) )\n" +
                        "    bar (a, b);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6PADFIRSTPARENTHESISOUTSIDE")}} title="Pad First Paren Outside" initialState={settings.includes("6PADFIRSTPARENTHESISOUTSIDE")} preview={"if (isFoo ((a+2), b))\n" +
                        "    bar (a, b);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6PADPARENTHESISINSIDE")}} title="Pad Parenthesis Inside" initialState={settings.includes("6PADPARENTHESISINSIDE")} preview={"if ( isFoo( ( a+2 ), b ) )\n" +
                        "    bar( a, b );"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6PadHeader")}} title="Pad Header" initialState={settings.includes("6PadHeader")} preview={"if (isFoo((a+2), b))\n" +
                        "    bar(a, b);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6UnpadParenthesis")}} title="Unpad Parenthesis" initialState={settings.includes("6UnpadParenthesis")} preview={"if(isFoo((a+2), b))\n" +
                        "    bar(a, b);"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6PadEmptyParenthesis")}} title="Pad Empty Parenthesis" initialState={settings.includes("6PadEmptyParenthesis")} preview={"if ( isFoo () )\n" +
                        "    bar( a, b );"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6PadBrackets")}} title="Pad Brackets" initialState={settings.includes("6PadBrackets")} preview={"a = b [ a [ 1 ] ];"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6UnPadBrackets")}} title="UnPad Brackets" initialState={settings.includes("6UnPadBrackets")} preview={"a = b[a[1]];"} language="csharp" supportedLanguages="C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Break Options</h1>
                <div className="settings">
                    <ToggleButton onClick={() => {addSetting("6BreakBlocks")}} title="Break Blocks" initialState={settings.includes("6BreakBlocks")} preview={"isFoo = true;\n" +
                        "\n" +
                        "if (isFoo) {\n" +
                        "    bar();\n" +
                        "} else {\n" +
                        "    anotherBar();\n" +
                        "}\n" +
                        "\n" +
                        "isBar = false;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6BreakAllBlocks")}} title="Break All Blocks" initialState={settings.includes("6BreakAllBlocks")} preview={"isFoo = true;\n" +
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
                    <ToggleButton onClick={() => {addSetting("6DeleteEmptyLines")}} title="Delete Empty Lines" initialState={settings.includes("6DeleteEmptyLines")} preview={"void Foo()\n" +
                        "{\n" +
                        "    foo1 = 1;\n" +
                        "    foo2 = 2;\n" +
                        "}"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6FillEmptyLines")}} title="Fill Empty Lines" initialState={settings.includes("6FillEmptyLines")} preview={"//No Preview"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6SqueezeWhitespace")}} title="Squeeze Whitespace" initialState={settings.includes("6SqueezeWhitespace")} preview={"void Foo ()\n" +
                        "{\n" +
                        "    foo1 = 1;\n" +
                        "}"} language="csharp" supportedLanguages="C#"/>
                </div>
                <h1 className="settingsTitle" style={{"margin-top": "45px"}}>Alignment Options</h1>
                <div className="settings">
                    <ToggleButton onClick={() => {addSetting("6AlignPointerType")}} title="Align Pointer By Type" initialState={settings.includes("6AlignPointerType")} preview={"char* foo1;\n" +
                        "char& foo2;\n" +
                        "string^ s1;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6AlignPointMiddle")}} title="Align Pointer By Middle" initialState={settings.includes("6AlignPointMiddle")} preview={"char * foo1;\n" +
                        "char & foo2;\n" +
                        "string ^ s1;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6AlignPointerName")}} title="Align Pointer By Name" initialState={settings.includes("6AlignPointerName")} preview={"char *foo1;\n" +
                        "char &foo2;\n" +
                        "string ^s1;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6ALIGNREFERENCETYPE ")}} title="Align Refer. By Type" initialState={settings.includes("6ALIGNREFERENCETYPE ")} preview={"char& foo1;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6ALIGNREFERENCEMIDDLE")}} title="Align Refer. By Middle" initialState={settings.includes("6ALIGNREFERENCEMIDDLE")} preview={"char & foo2;"} language="csharp" supportedLanguages="C#"/>
                    <ToggleButton onClick={() => {addSetting("6ALIGNREFERENCENAME")}} title="Align Refer. By Name" initialState={settings.includes("6ALIGNREFERENCENAME")} preview={"char &foo3;"} language="csharp" supportedLanguages="C#"/>
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