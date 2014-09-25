#!/bin/bash
# Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
# For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license

# Build CKEditor using the default settings (and build.js).

set -e

echo "CKBuilder - Builds a release version of ckeditor4."
echo ""

CKBUILDER_VERSION="2.3.2"
CKBUILDER_URL="https://download.cksource.com/CKBuilder/$CKBUILDER_VERSION/ckbuilder.jar"

RED='\033[01;31m'
GREEN='\033[01;32m'
YELLOW='\033[01;33m'
UNDERLINE='\033[4m'
RESET_STYLE='\033[0m'

PROGNAME=$(basename $0)
MSG_UPDATE_FAILED="Warning: The attempt to update ckbuilder.jar failed. The existing file will be used."
MSG_DOWNLOAD_FAILED="It was not possible to download ckbuilder.jar."
MSG_INCORRECT_JDK_VERSION="${RED}Your JDK version is not supported, there may be a problem to finish build process. Please change the JDK version to 15 or lower.${RED} ${GREEN}https://jdk.java.net/archive/${GREEN}"
ARGS=" $@ "

function error_exit
{
	echo "${PROGNAME}: ${1:-"Unknown Error"}" 1>&2
	exit 1
}

function command_exists
{
	command -v "$1" > /dev/null 2>&1;
}

# Move to the script directory.
cd $(dirname $0)

# Download/update ckbuilder.jar.
mkdir -p ckbuilder/$CKBUILDER_VERSION
cd ckbuilder/$CKBUILDER_VERSION
if [ -f ckbuilder.jar ]; then
	echo "Checking/Updating CKBuilder..."
	if command_exists curl ; then
	curl -O -R -z ckbuilder.jar $CKBUILDER_URL || echo "$MSG_UPDATE_FAILED"
	else
	wget -N $CKBUILDER_URL || echo "$MSG_UPDATE_FAILED"
	fi
else
	echo "Downloading CKBuilder..."
	if command_exists curl ; then
	curl -O -R $CKBUILDER_URL || error_exit "$MSG_DOWNLOAD_FAILED"
	else
	wget -N $CKBUILDER_URL || error_exit "$MSG_DOWNLOAD_FAILED"
	fi
fi
cd ../..

# Run the builder.
echo ""
echo "Starting CKBuilder..."

JAVA_ARGS=${ARGS// -t / } # Remove -t from arrgs

java -jar ckbuilder/$CKBUILDER_VERSION/ckbuilder.jar --build ../../ release --version="4.4.4-jahia2" --overwrite $JAVA_ARGS

# Copy and build tests
if [[ "$ARGS" == *\ \-t\ * ]]; then
	echo ""
	echo "Coping tests..."

	cp -r ../../tests release/ckeditor/tests
	cp -r ../../package.json release/ckeditor/package.json
	cp -r ../../bender.js release/ckeditor/bender.js

	echo ""
	echo "Installing tests..."

	(cd release/ckeditor &&	npm install && bender init)
fi

echo ""
echo "Release created in the \"release\" directory."
