#!/usr/bin/env node
const path = require('path')
const { execSync } = require('child_process')
const fs = require('fs-extra')

const projectName = 'template-monorepo-demo'
fs.removeSync(`${__dirname}/${projectName}`)

const command = `gmc create ${projectName} --skip-installDeps --local-template=${path.resolve(__dirname)}`
console.log(command)
execSync(command, { stdio: 'inherit' })
