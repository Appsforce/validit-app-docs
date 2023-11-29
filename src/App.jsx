import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
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
          <h3 className="bold text-2xl mt-8">iOS</h3>
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
          </ul>
          <h3 className="bold text-2xl mt-8">Android</h3>
          <CodeBlock>$ npm run android:dev</CodeBlock>
          <InfoPanel className="mt-4">
            The mobile device has to be on the same wifi network as the computer
            on both platforms
          </InfoPanel>
        </Collapse>
        <Collapse title="Installing and upgrading dependencies">
          <ul className="list-decimal list-inside space-y-2">
            <li>
              <CodeBlock copy={false}>
                $ npm i YOUR_MODULE --legacy-peer-deps
              </CodeBlock>
            </li>
            <li>
              <CodeBlock copyText="cd ios && pod install">
                $ cd ios && pod install
              </CodeBlock>
            </li>
            <li>
              Xcode pops up an alert with two options, select read from disc
            </li>
            <li>Repeat step 6 - 9 from the installation section ( iOS )</li>
          </ul>
        </Collapse>
        <Collapse title="Upgrading binah">
          <ul className="list-decimal list-inside space-y-2">
            <li>
              <span>
                download the new binah sdk file from the{" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://binahai.sharefile.com/oauth/authorize?client_id=S91b5wNXMkpKqFTWBl4sCpAKs14Kc5vy&scope=&response_type=code&redirect_uri=https%3A%2F%2Fauth.sharefile.io%2Fsignin-sharefile&state=CfDJ8CFE4ppei_ZOq62VAV2OCKzxOtbZgB2r9ccCIuKcVPl0JuCa14vQplAfR4C9pYtEYr-grVaBKF1PhU6Tvhdax3pP5B66WQmfO-LG7OJ8wuxYY4qLVEFxz238VOWB6hIRiM_v4OiiCVuCmzlNLeGt2Zxe-HQIU1ykkHP_AJs5DInJaV6WFT7lIob3oWp2UCuK3Em9rsYajRuojz-znescxb4kmDPhcnNHQIbunmWCVUMli2qM9jNmLZZS1VKi6PUVMbPF7Dnhy8UMVramilgYLvxQhwnhIro3V6jS4jJy4cf4w7jQVUKFFRwUyOyrnnVew_vcH4eAhsZu8mOXwsCyByykZyz1NAQlLsI9iwDJfNgKsRXOyzb5bvXvrrcfIbKvzWRMKNsdOjvGLlnr8fiEpvj8PKEI2d0MVaQhda0FWm1eBU8IHw7mMKJ_NzSz3fBXZTUGmsuq8aQky10TjcLjaht-i-2khRFt9x47krL3Pm_TW-3aXphbApSBDAJrhwgliBg4j1iWQPFKXtE4b2cnJuoNrh8bAR5tqlIBpKxOkUTYHxmvrjKl4G1YRfPw3XyKFWQ1SifnfAwkc2qEQm0mSor64m2UGgYQrxnuMxo40wihAjHiJMQr7aWJOH19irfYlK47_HJRO5pmUytQgWA7_3slZdAezQc8HVVC1D4CUJA5lxEtYvuPMq29mlKr5DTnggqUmX8EaWRKh8TVLdyR0zr7cdk8NUBbk5unqOnbRlI4&subdomain=binahai#/Credentials"
                >
                  binah sharefile
                </a>
              </span>
            </li>
            <li>
              Place the file in the root directory of the project, replacing the
              old one
            </li>
            <li>
              Replace the binah sdk version in the package.json file with the
              new one
              <div className="py-2 space-y-2">
                <CodeBlock className="text-sm" copy={false}>
                  {`"binah-react-native-sdk":"file:Binah_ReactNative_SDK_4.12.1.tar"`}
                </CodeBlock>
                <ArrowsUpDownIcon className="w-6" />
                <CodeBlock className="text-sm" copy={false}>
                  {`"binah-react-native-sdk": "file:NEW_FILE_NAME",`}
                </CodeBlock>
              </div>
            </li>
            <li>Refer to installing and upgrading dependencies section</li>
          </ul>
        </Collapse>
        <Collapse title="Deployment ( Stage )"></Collapse>
      </div>
    </div>
  );
}

export default App;
