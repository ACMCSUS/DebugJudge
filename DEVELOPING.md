## Required Tools:
 - Git
 - Java >= 8 (JDK)
 - NodeJS
 - Yarn (can be installed globally through npm)

## Setup

### 1. Getting the project onto your computer
 - `$ cd folder/where/your/projects/are`
 - `$ git clone https://github.com/ACMCSUS/DebugJudge.git`
 - `$ cd DebugJudge`

### 2. Install dependencies
 - `$ yarn install`

## Start Development

### 1. Start a new branch
 - `$ git branch mynewbranch dev`
 - `$ git checkout mynewbranch`
 - Note: Please parent your new branches to dev by default
   - This practice might change in the future

### 2. Have Angular watch your src and rebuild automatically
 - `$ yarn run ng build --watch`

### 3. Launch backend through gradle
 - `./gradlew run`
 - Note: This will say "85%", but it's really running.
 - Note: If you have idea perform this gradle task in debug mode, you can use breakpoints.

## Notes about development

### Frontend changes automatically applied
 - Just refresh your browser to get the new frontend
 - If you don't like the watching functionality, remove `--watch` from the ng build script.

### Protocol Buffers
 - When you change the proto files, you need to regenerate the TS code.
   - `$ yarn run protoc`
 - For now, we commit the TS files for protos into GitHub.
 - For merge conflicts in the proto TS code, fix the proto and then regenerate.
   - Do not attempt to fix merge conflicts manually, it will just be overwritten.

