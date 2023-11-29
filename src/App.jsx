import { CodeBlock } from "./components/CodeBlock";
import Collapse from "./components/Collapse";
import { InfoPanel } from "./components/InfoPanel";

function App() {
  return (
    <div className="flex w-screen h-screen flex-col items-center text-xl gap-4 overflow-x-hidden py-8">
      <h1 className="text-4xl">Validit app docs</h1>
      <div>
        <h2 className="text-2xl">Table of contents</h2>
        <ul className="list-disc list-inside">
          <li>Prerequesites</li>
          <li>
            Installation
            <ul className="list-disc list-inside pl-4">
              <li>iOS</li>
              <li>Android</li>
            </ul>
          </li>
          <li>Installing / upgrading dependencies</li>
          <li>Upgrading binah</li>
          <li>
            Deployment ( stage )
            <ul className="list-disc list-inside pl-4">
              <li>Android</li>
              <li>iOS</li>
            </ul>
          </li>
          <li>
            Deployment ( production )
            <ul className="list-disc list-inside pl-4">
              <li>Android</li>
              <li>iOS</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <Collapse title="Prerequesites">
          <ul className="list-disc list-inside" id="prereq-a">
            <li>Xcode</li>
            <li>Cocoapod</li>
            <li>Android studio</li>
            <li>Node</li>
            <li>App center cli</li>
          </ul>
        </Collapse>
        <Collapse title="Installation and running">
          <ul
            className="list-decimal list-inside list space-y-2"
            id="install-a"
          >
            <li>Clone the repo</li>
            <li>
              Place{" "}
              <a
                className="underline"
                href="https://drive.google.com/file/d/1KzRMgXxFDZ-21FRAorc3qQEGkd3riW-L/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Binah sdk
              </a>{" "}
              file in project root directory
            </li>
            <li>
              Place{" "}
              <a
                className="underline"
                href="https://drive.google.com/drive/folders/1wnDIjDa6RqsjKf9W8_jEUVSzs8Rmjk97?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                env files
              </a>{" "}
              in the project root directory
            </li>
            <li>
              <CodeBlock copyText="npm i --legacy-peer-deps">
                $ npm i --legacy-peer-deps
              </CodeBlock>
            </li>
            <InfoPanel variant="warning" className="my-2">
              <span>
                Legacy peer deps is <strong> required</strong>
              </span>
            </InfoPanel>
            <li>
              <CodeBlock copyText="cd ios && pod install">
                $ cd ios && pod install
              </CodeBlock>
            </li>
          </ul>
          <h3 className="bold text-2xl">iOS</h3>
          <ul className="list-decimal list-inside space-y-2">
            <li>
              <span>
                Go to{" "}
                <a
                  href="https://developer.apple.com/account/resources/certificates/list"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Apple developer console
                </a>{" "}
                ( App store connect )
              </span>
            </li>
            <li>
              Click the Valid.it Evaluations Solutions LTD profile, either one,
              and download the certificate in the top right. once downloaded,
              double click it and it should be added to keychain.
            </li>
            <li>open in ios/xcode validitApp.xcworkspace with xcode. </li>
            <li>
              leftmost file explorer → validitApp → Signing and Capabilities →
              Signing Debug, Release and Staging → Team → Validit Evaluations
              Solutions LTD.
            </li>
            <li>
              Bundle identifier → Debug - random value, Release and staging
              -org.reactjs.native.example.validitApp
            </li>
            <li>
              leftmost file explorer → pods → second explorer → EXConstants -
              EXConstants → set team to Valid.it Evaluations Solutions LTD
            </li>
            <li>Repeat step 6 but with React-Core-Accesability-Resources</li>
            <li>
              in XCode top menu, where it says Any IOS device (arm64) select
              your device
            </li>
            <li>Click the play button on the left</li>
            <InfoPanel>
              The mobile device has to be on the same wifi network as the
              computer
            </InfoPanel>
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default App;
