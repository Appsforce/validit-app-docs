import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { CodeBlock } from "./components/CodeBlock";
import Drawer from "./components/Drawer";
import { InfoPanel } from "./components/InfoPanel";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Drawer />
      <div className="flex h-full flex-col ml-52 pl-4 mr-4 text-lg gap-2 py-4">
        <h2 id="prerequisites" className="text-4xl font-bold mb-4">
          Pre-requesties
        </h2>
        <ul className="list-disc list-inside" id="prereq-a">
          <li>Xcode</li>
          <li>Cocoapod</li>
          <li>Android studio</li>
          <li>Node</li>
          <li>App center cli</li>
        </ul>
        <hr className="my-2" />
        <h2 className="text-4xl font-bold">Installation</h2>
        <ul className="list-decimal list-inside list space-y-2">
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
        <h3 className="font-bold text-2xl mt-4" id="installation-ios">
          iOS
        </h3>
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
            in XCode top menu, where it says Any IOS device (arm64) select your
            device
          </li>
          <li>Click the play button on the left</li>
        </ul>
        <h3 className="font-bold text-2xl mt-4" id="installation-android">
          Android
        </h3>
        <CodeBlock copyText="npm run android:dev">
          $ npm run android:dev
        </CodeBlock>
        <InfoPanel className="mt-4">
          The mobile device has to be on the same wifi network as the computer
          on both platforms
        </InfoPanel>
        <hr className="my-4" />
        <h2 className="text-4xl font-bold" id="installing-dependencies">
          Installing / upgrading dependencies
        </h2>
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
        <hr className="my-4" />
        <h2 className="text-4xl font-bold" id="upgrading-binah">
          Upgrading binah
        </h2>
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
            Replace the binah sdk version in the package.json file with the new
            one
            <div className="py-2 space-y-2">
              <CodeBlock copy={false}>
                {`"binah-react-native-sdk":"file:Binah_ReactNative_SDK_4.12.1.tar"`}
              </CodeBlock>
              <ArrowsUpDownIcon className="w-6" />
              <CodeBlock copy={false}>
                {`"binah-react-native-sdk": "file:NEW_FILE_NAME",`}
              </CodeBlock>
            </div>
          </li>
          <li>Refer to installing and upgrading dependencies section</li>
        </ul>
        <hr className="my-4" />
        <h2 className="text-4xl font-bold" id="deployment-stage">
          Deployment ( Stage )
        </h2>
        <h3 className="font-bold text-2xl" id="deployment-stage-ios">
          iOS
        </h3>

        <ul className="list-decimal list-inside space-y-2">
          <li>In root console</li>
          <CodeBlock copyText="npm version patch">
            $ npm version patch
          </CodeBlock>
          <li>Open xcode</li>
          <li>
            In the top section where it says validitApp → Any iOS Device
            (arm64), replace validitApp to → validitApp - Staging
          </li>
          <InfoPanel variant="warning">
            In step 3, 4 and 5, make sure Any iOS Device (arm64) is selected and
            not a connected device
          </InfoPanel>
          <li>in the top menu → Product → Clean build folder ( or ⇧⌘K )</li>
          <li>same menu, build ( or ⌘B )</li>
          <InfoPanel>
            The build ( and archive ) may take a short while, between 3 to 7
            minutes or so
          </InfoPanel>
          <li>Once build is done, same menu, archive</li>
          <li>
            Once archive is done, an organizer window should pop up, if it
            doesn’t, go to the top menu, Window → Organizer ( or ⎇⇧⌘O )
          </li>
          <li>Select the top option ( latest build )</li>
          <li>click Distribute app on the right</li>
          <li>Select TestFlight Internal Only</li>
          <li>Distribute</li>
        </ul>
        <h3 className="font-bold text-2xl" id="deployment-stage-android">
          Android
        </h3>
        <ul className="list-decimal list-inside space-y-2">
          <li>in root terminal</li>
          <CodeBlock copyText="npm version patch">
            $ npm version patch
          </CodeBlock>
          <br />
          <CodeBlock copyText="npm run build:aab:stage">
            $ npm run build:aab:stage
          </CodeBlock>
          <InfoPanel>
            If it’s the first time you run this, you will be required to
            authenticate on app center.
          </InfoPanel>
          this command should take care of everything, if the last step gets
          stuck, cancel it ( ⌘CMD + C ), and run
          <CodeBlock copyText="npm run deploy:stage:android">
            $ npm run deploy:stage:android
          </CodeBlock>
        </ul>
        <hr className="my-4" />
        <h2 className="text-4xl font-bold">Deployment ( Prod )</h2>
        <h3 className="text-2xl font-bold" id="deployment-prod-ios">
          iOS
        </h3>
        <ul className="list-decimal list-inside space-y-2">
          <li>In root console</li>
          <CodeBlock copyText="npm version patch">
            $ npm version patch
          </CodeBlock>
          <li>Open xcode</li>
          <li>
            In the top section where it says validitApp → Any iOS Device
            (arm64), replace validitApp to → validitApp - Prod
          </li>
          <InfoPanel variant="warning">
            In step 3, 4 and 5, make sure Any iOS Device (arm64) is selected and
            not a connected device.
          </InfoPanel>
          <li>in the top menu → Product → Clean build folder ( or ⇧⌘K )</li>
          <li>same menu, build ( or ⌘B )</li>
          <InfoPanel>
            The build ( and archive ) may take a short while, between 3 to 7
            minutes or so
          </InfoPanel>
          <li>Once build is done, same menu, archive</li>
          <li>
            Once archive is done, an organizer window should pop up, if it
            doesn’t, go to the top menu, Window → Organizer ( or ⎇⇧⌘O )
          </li>
          <li>Select the top option ( latest build )</li>
          <li>click Distribute app on the right</li>
          <li>Select TestFlight & App Store</li>
          <li>
            <span>
              once done, go to{" "}
              <a
                href="https://appstoreconnect.apple.com/login"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                App store connect
              </a>
            </span>
          </li>
          <li>Apps → Validit.ai</li>
          <li>Left menu → Plus button where it says iOS app</li>
          <li>Enter the version number you just built.</li>
          <li>scroll down to the build section</li>
          <li>select the build you just uploaded</li>
          <InfoPanel variant="warning">
            If the build doesn’t appear, wait for the email that it’s up on
            testflight, if that doesn’t happen in 5 - 10 minutes, try again.
          </InfoPanel>
          <li>
            in the “What’s new in this version?” section enter atleast 7
            characters ( bug fixes / ui upgrade etc.)
          </li>
          <li>top right → add for review</li>
          <li>Send for review</li>
        </ul>
        <h3 className="text-2xl font-bold" id="deployment-prod-android">
          Android
        </h3>
        <ul className="list-decimal list-inside space-y-2">
          <li>In root console</li>
          <CodeBlock copyText="npm version patch">
            $ npm version patch
          </CodeBlock>
          <br />
          <CodeBlock copyText="npm run build:aab">
            $ npm run build:aab
          </CodeBlock>
          <li>
            <span>
              go to{" "}
              <a
                href="https://play.google.com/console/u/0/developers/6314761934093563030/app/4973843767571035107/app-dashboard?timespan=thirtyDays"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Google play console
              </a>
            </span>
          </li>
          <li>
            Apps → Validit → Left navigation menu → Production → Create new
            release → Upload aab from
            validit-app/android/app/build/outputs/bundle/prodRelease/app-prod-release.aab
          </li>
          <li>full rollout</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
