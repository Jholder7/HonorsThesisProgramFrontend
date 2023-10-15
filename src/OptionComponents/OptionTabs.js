import React, {useState} from "react";
import "./OptionTabs.css"
import ToggleButton from "./ToggleButton"

function OptionTabs() {

    const [tab, setTab] = useState(0)

    return (
        <div className="optionsTab">
            <header>
                <link rel="stylesheet" href="OptionTabs.css" />
            </header>
            <section className="tabSelectBar">
                <button onClick={() => {setTab(0)}} className={`tab ${tab === 0 ? 'selectedTab' : ''}`} style={{"margin-left": "5px"}}>
                    <h1 className="tabTitle">Brace Options</h1>
                </button>
                <button onClick={() => {setTab(1)}} className={`tab ${tab === 1 ? 'selectedTab' : ''}`}>
                    <h1 className="tabTitle">Tab Options</h1>
                </button>
                <button onClick={() => {setTab(2)}} className={`tab ${tab === 2 ? 'selectedTab' : ''}`}>
                    <h1 className="tabTitle">Brace Style</h1>
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

    function braceOptions(){
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Tab indentation Settings</h1>
                <div className="settings">
                    <ToggleButton title="Attach Namespace" initialState={false} preview={"namespace FooName {\r\n...\r\n}"} language="csharp"/>
                    <ToggleButton title="Attach Classes" initialState={false} preview={"class FooClass {\n...\n};"} language="csharp"/>
                    <ToggleButton title="Attach Inlnes" initialState={false} preview={"class FooClass\n{\n    void Foo() {\n    ...\n    }\n};"} language="csharp"/>
                    <ToggleButton title="Attach Closing While" initialState={false} preview={"do\n{\n    bar();\n    ++x;\n} while x == 1;"} language="csharp"/>
                </div>
            </div>
        );
    }

    function tabOptions(){
        return (
            <div className="settingsPage">
                <h1 className="settingsTitle">Tab indentation Settings</h1>
                <div className="settings">
                    <ToggleButton title="With Spaces" initialState={false} preview={"void Foo() {\n....if (isBar1\n............&& isBar2)\n........bar();\n}"} language="csharp"/>
                    <ToggleButton title="With Tabs" initialState={false} preview={"void Foo() {\n>   if (isBar1\n>   ........&& isBar2)\n>   >   bar();\n}"} language="csharp"/>
                    <ToggleButton title="Force Tabs" initialState={false} preview={"void Foo() {\n>   if (isBar1\n>   >   >   && isBar2)\n>   >   bar();\n}"} language="csharp"/>
                    <ToggleButton title="Force Tabs #" initialState={false} preview={"//currently not supported"} language="csharp"/>
                </div>
            </div>
        );
    }

    function braceStyle(){
        return (
            <div>
                Needs Implemented
            </div>
        );
    }

    function formattingOptions(){
        return (
            <div>
                Needs Implemented
            </div>
        );
    }

    function indentationOptions(){
        return (
            <div>
                Needs Implemented
            </div>
        );
    }

    function paddingOptions(){
        return (
            <div>
                Needs Implemented
            </div>
        );
    }

    function objectCOptions(){
        return (
            <div>
                Needs Implemented
            </div>
        );
    }

    function getSettingsPage(num){
        switch (num) {
            case 0:
                return braceOptions();
                break;
            case 1:
                return tabOptions();
                break;
            case 2:
                return braceStyle();
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