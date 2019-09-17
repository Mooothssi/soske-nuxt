<template>
<div>
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="overlay"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="banner_content text-center">
                <h2>Software Prerequisites for 8<sup>th</sup> SOS Camp</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<div class="container">
  <div class="bd-callout bd-callout-info" v-if="OS==='Mac OSX' || OS==='Windows 7' || OS==='Windows 8' || OS==='Windows 8.1' || OS==='Windows 10'">
    <h3 class="text-info"><font-awesome-icon icon="info-circle"/> <span class="text-info" v-if="OS==='Mac OSX'">Oooh!!! </span>Looks like you are currently on <span class="text-info" v-if="OS==='Windows 7' || OS==='Windows 8' || OS==='Windows 8.1' || OS==='Windows 10'">Windows</span><span class="text-info" v-if="OS==='Mac OSX'">macOS</span></h3>
    <p>Please consult the Quick Setup Guide for <span v-if="OS==='Windows 7' || OS==='Windows 8' || OS==='Windows 8.1' || OS==='Windows 10'">Windows</span><span v-if="OS==='Mac OSX'">macOS</span> ({{ OS }})</p>
  </div>
  <no-ssr>
  <b-tabs pills card>
    <b-tab :active="OS==='Windows'">
      <template slot="title">
        <font-awesome-icon :icon="['fab', 'windows']"/> For Windows
      </template>
    <b-card class="my-3 bg-topic">
        <h2>Quick Setup Guide for <font-awesome-icon :icon="['fab', 'windows']"/> Windows</h2>
        <p>by MaiMee</p>
    </b-card>
    <div class="icon baseline">
          <svg viewBox="0 0 48 48">
            <image xlink:href="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" src="VSCode_Logo.svg" width="50" height="50"/>
          </svg>&nbsp; <h3 id="1-python-3-7-3">Python 3.7.3</h3>
    </div>
    <p></p>
    <b-card id="python-win32-download" title="Download" >
        <b-card-sub-title>
            For <font-awesome-icon :icon="['fab', 'windows']"/> Windows 7/8/10:
        </b-card-sub-title>
        <b-row>
            <b-col>
                <b-card>
                    <b-card-body class="card-outlined">
                        <p class="text-muted">x64 (64-bit)</p>
                        <a href="https://www.python.org/ftp/python/3.7.3/python-3.7.3-amd64.exe"><font-awesome-icon icon="download"/> Windows x86-64 executable installer</a>
                    </b-card-body>
                </b-card>
        </b-col>
        <b-col>
                            <b-card>
                    <b-card-body class="card-outlined">
                        <p class="text-muted">x86/Itanium (32-bit)</p>
                        <a href="https://www.python.org/ftp/python/3.7.3/python-3.7.3.exe"><font-awesome-icon icon="download"/> Windows x86 executable installer</a>
                    </b-card-body>
                </b-card>
        </b-col>
        </b-row>
    </b-card>
    <p><strong class="text-danger">Python 3.7.3 <em>cannot</em> be used on Windows XP or earlier.</strong> For more info: <a href="https://wiki.python.org/moin/BeginnersGuide/Download">link</a>.</p>
    <p>To check your system type:</p>
    <ul>
    <li>Windows 10/7: Hit <code>Start</code> (Windows key) then type &quot;system information&quot; to search for System Information.</li>
    <li>Windows 10/8/7: Hit <code>Start+R</code> to bring up Run and type &quot;msinfo32&quot; to open System Information.</li>
    </ul>
    <p><img class="img-fluid" src="https://i.imgur.com/SkiVTFC.png" alt=""></p>
    <p>You can also go to this <a href="https://www.python.org/downloads/release/python-373/">link</a> and scroll down until you see this and download it yourself.</p>
    <p><img class="img-fluid" src="https://i.imgur.com/TfW1aeQ.png" alt=""></p>

    <h3 id="installation">1) Installation</h3>
    <p>Steps:</p>
    <ol>
    <li>Open the installer</li>
    <li><strong>Tick &quot;Add Python 3.7 to PATH&quot;</strong></li>
    <li>Click &quot;Install Now&quot;</li>
    <li>Wait until finished then click &quot;Close&quot;</li>
    <li>That&#39;s it</li>
    </ol>
    <p><img class="img-fluid" src="https://i.imgur.com/p43oYkQ.png" alt=""></p>
    <p>To check if your installation went smoothly, bring up Command Prompt. (Hit <code>Start</code> then type &quot;cmd&quot; to search for it.) Type &quot;<code>python --version</code>&quot; then hit <code>Enter</code> and see if the output matches what is shown below. Typing &quot;<code>python</code>&quot; should bring up what is called the <em>python shell</em> as shown as well.</p>
    <p><img class="img-fluid" src="https://i.imgur.com/SFSbydL.png" alt="Picture showing correct installation"></p>
    <p>If it instead says &quot;<code>&#39;python&#39; is not recognized as an internal or external command,
    operable program or batch file.</code>&quot; as shown here:</p>
    <p><img class="img-fluid" src="https://i.imgur.com/vvwcmuC.png" alt=""></p>
    <p>it means that you have not ticked &quot;Add Python 3.7 to PATH&quot; during the installation process. <strong>Do not worry</strong> as (1) this is not a problem and (2) we can solve this, either by manually adding python&#39;s directoy to PATH (ask a TA) or by redoing the installation (if you do not have anything to lose).</p>
    <hr/>
    <h2 id="2-an-ide-of-your-choice">2. An IDE of your choice</h2>
    <p>You can write programs with notepad but we do not advise you to do so.</p>
    <p>Some features you may want besides typing and saving:</p>
    <ul>
    <li>Syntax highlighting</li>
    <li>Search-and-replace, in one or multiple documents, based on regular expressions or other patterns as needed</li>
    <li>Quickly jump to a given line</li>
    <li>View two parts of a large document separately</li>
    <li>Select text in multiple places at once</li>
    <li>View your project&#39;s files and directories</li>
    <li>Format your code automatically</li>
    <li>Check spelling</li>
    </ul>
    <p>A <strong>code or text editor</strong> is a tool that has one or more of these features. (Basically an amped up notepad.)</p>
    <p>What we advise you to use is called an <strong>IDE</strong> (Integrated Development Environment) which provides more features like <em>automation, code linting, testing and debugging</em>. (Basically an amped up code editor.)</p>
    <p>The IDE for Python of our choice is <strong>PyCharm</strong> but it is up to you what you want to use. PyCharm is a bit <em>resource intensive</em> <del>(or so I&#39;ve heard)</del> so if your computer has a small amount of RAM (less than 4 GB) it may cause lagging. </p>
    <p>Another good option is <strong>Visual Studio Code</strong> which is a <strong>free and open-source</strong> IDE created by Microsoft. It can write in other languages besides Python and is lightweight and highly customizable.</p>

    <b-card class="my-4" id="pycharm-community-edition-win32">
      <b-card-title>
        <div class="icon baseline">
          <svg viewBox="0 0 48 48">
            <image xlink:href="https://upload.wikimedia.org/wikipedia/commons/a/a1/PyCharm_Logo.svg" src="PyCharm_Logo.svg" width="50" height="50"/>
          </svg>&nbsp;<h2>PyCharm Community Edition</h2>
        </div>
      </b-card-title>
      <p>Read through the installation. There is no harm to just going &quot;next, next, next, next, install&quot; so do not worry.</p>
      <b-card class="card-outlined text-center mb-2">
        <p><a href="https://www.jetbrains.com/pycharm/download/"><font-awesome-icon icon="download"/> Download PyCharm</a></p>
        <small class="text-muted">for <strong>free and open-source</strong> download the <strong>Community Edition</strong></small>
      </b-card>
      <p>Some information:</p>
      <ul>
      <li><code>Update PATH variable</code> means you can use PyCharm features from the command line. I say no need to tick this.</li>
      <li><code>Update context menu -- Add Open folder as project&quot;</code> means it wants to add an option when you right click on/in a directory to open it as a project. I say up to you.</li>
      <li><code>Create Associations -- .py</code> means it wants to be the default program to open some types of files, in this case &quot;.py&quot;. I say tick this.</li>
      </ul>
      <div class="bd-callout bd-callout-info">
        <h5 class="text-info"><font-awesome-icon icon="info-circle"/> Pro Tip</h5>
        <p>You can also install <strong>Toolbox</strong> which will manage all JetBrains/IntelliJ (the company behind PyCharm) applications and their updates for you.</p>
        <p><a href="https://www.jetbrains.com/toolbox/app/"><font-awesome-icon icon="download"/> Download Toolbox</a></p>
        <p><strong>If you install Toolbox there is no need to download PyCharm CE separately.</strong></p>
      </div>
    </b-card>
    <b-card class="my-4" id="visual-studio-code-win32">
      <b-card-title>
        <div class="icon baseline">
          <svg viewBox="0 0 48 48">
            <image xlink:href="https://dashboard.snapcraft.io/site_media/appmedia/2019/05/code_ozwVHSV.png" src="VSCode_Logo.svg" width="50" height="50"/>
          </svg>&nbsp;<h2>Visual Studio Code</h2>
        </div>
      </b-card-title>
      <p>Read through the installation. There is no harm to just going &quot;next, accept, next, next, next, install&quot; so do not worry.</p>
      <b-card class="card-outlined text-center mb-2">
        <p><a href="https://code.visualstudio.com/download"><font-awesome-icon icon="download"/> Download VS code</a></p>
      </b-card>
      <p>Some information:</p>
      <ul>
      <li><code>Add &quot;Open with code&quot; action to Windows Explorer file context menu</code> means it wants to add an option when you right click on a file. I say leave it ticked.</li>
      <li><code>Add &quot;Open with code&quot; action to Windows Explorer directory context menu</code> means it wants to add an option when you right click on/in a directory. I say up to you.</li>
      <li><code>Register Code as an editor for supported file types</code> means it wants to be the default program to open some types of files. I say leave it ticked.</li>
      <li><code>Add to PATH</code> means you can use VS code features from the command line. IDK about this. (This writer is not that proficient with VS code.)</li>
      </ul>
    </b-card>
    </b-tab>
    <b-tab :active="OS==='Mac OSX'">
      <template slot="title">
        <font-awesome-icon :icon="['fab', 'apple']"/> For macOS
      </template>
    <b-card class="my-3 bg-topic">
        <h2>Quick Setup Guide for <font-awesome-icon :icon="['fab', 'apple']"/> macOS</h2>
        <p>by MaiMee</p>
    </b-card>
    <div class="icon baseline">
          <svg viewBox="0 0 48 48">
            <image xlink:href="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" src="VSCode_Logo.svg" width="50" height="50"/>
          </svg>&nbsp; <h3 id="1-python-3-7-3">Python 3.7.3</h3>
    </div>
<p>You need Python in order to run Python. Although you may already have Python installed, the version we are using is Python 3. We reccommend using the latest stable release (currently 3.7.3).</p>
<p><nobr style="white-space: nowrap;">To check if you have the correct python version installed, bring up <div class="icon-1rem baseline"><img src="https://macreports.com/wp-content/uploads/2019/05/terminal-app-icon.png" width="60" height="60"/>&nbsp;<strong>Terminal</strong></div></nobr>
and try typing <code>python --version</code> or <code>python3 --version</code> then press <code>Enter</code>.</p>
<pre><code>$ python3 --version
Python <span class="hljs-number">3.7</span><span class="hljs-number">.3</span>
</code></pre><p>If the output is not similar (note that we want Python 3 not Python 2) to what is shown above, you do not have it installed. (The writer cannot show much to you because he does not have a mac book.)</p>
<p>To install Python 3.7.3 either download an installer from python.org or use HomeBrew (for that refer to another tutorial online).</p>
<div class="bd-callout bd-callout-info">
  <h5 class="text-info"><font-awesome-icon icon="info-circle"/> Pro Tip</h5>
  <p>If you cannot find the Terminal, use <span class="text-info"><strong>Spotlight</strong></span> (click the search icon in the upper-right corner of the menu bar, or press <code>Command + Space bar</code>) then type <code>terminal</code>.</p>
  <p><img class="img-fluid" src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/highsierra/macos-high-sierra-menu-bar-spotlight-crop.jpg" alt=""></p>
</div>
<h3 id="installation">1) Bootstrapping</h3>
<p>Here are the steps:</p>
<h3 id="1-downloading-the-installer">1. Downloading the installer</h3>
<b-card id="python-win32-download" title="Download" >
        <b-card-sub-title>
            For <font-awesome-icon :icon="['fab', 'apple']"/> macOS:
        </b-card-sub-title>
        <b-row>
            <b-col>
                <b-card>
                    <b-card-body class="card-outlined">
                        <p class="text-muted">OS X 10.9 (Mavericks) and later (.pkg) <i>(up to macOS Mojave 10.14, macOS Catalina 10.15)</i></p>
                        <a href="https://www.python.org/ftp/python/3.7.3/python-3.7.3-macosx10.9.pkg"><font-awesome-icon icon="download"/> macOS 64-bit package installer</a>
                    </b-card-body>
                </b-card>
        </b-col>
        <b-col>
                            <b-card>
                    <b-card-body class="card-outlined">
                        <p class="text-muted">Mac OS X 10.6 (Snow Leopard) and later (.pkg)</p>
                        <a href="https://www.python.org/ftp/python/3.7.3/python-3.7.3-macosx10.6.pkg"><font-awesome-icon icon="download"/> Mac OS X 64-bit/32-bit package installer</a>
                    </b-card-body>
                </b-card>
        </b-col>
        </b-row>
    </b-card>
<p>Use the 64-bit-only installer variant unless you are building Python applications that also need to work on older macOS systems.</p>
<p>To find out which macOS your Mac is using:</p>
<ul>
<li>From the Apple menu <font-awesome-icon :icon="['fab', 'apple']"/> in the corner of your screen, choose About This Mac. You&#39;ll see the macOS name, such as macOS Mojave, followed by its version number.</li>
</ul>
<p><img class="img-fluid" src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/Mojave/macos-mojave-about-this-mac-overview-version-build.jpg" alt=""></p>
<p>You can also go to this <a href="https://www.python.org/downloads/release/python-373/">link</a> and scroll down until you see this and download it yourself.</p>
<p><img class="img-fluid" src="https://i.imgur.com/TfW1aeQ.png" alt=""></p>
<h3 id="2-installation">2. Installation</h3>
<p>Open the installer then, according to a senior that uses Mac, you can just &quot;continue, continue, contiue, accept and install&quot;. (Note that the write does not use Mac, but instructions online seems to not focus much on this.)</p>
<p>To check if your installation went smoothly, bring up <strong>Terminal</strong> and try <code>python --version</code> or <code>python3 --version</code> again.</p>
<pre><code>$ python3 --version
Python <span class="hljs-number">3.7</span><span class="hljs-number">.3</span>
</code></pre><p>The output should be like what is shown above.</p>
<p>Entering <code>python3</code> should bring up the python shell which looks like this.</p>
<pre><code>$ python3
Python <span class="hljs-number">3.7</span><span class="hljs-meta">.3</span> (<span class="hljs-meta">default</span>, Jun <span class="hljs-number">29</span> <span class="hljs-number">2018</span>, <span class="hljs-number">20</span>:<span class="hljs-number">13</span>:<span class="hljs-number">13</span>)
[Clang <span class="hljs-number">9.1</span><span class="hljs-meta">.0</span> (clang-<span class="hljs-number">902.0</span><span class="hljs-meta">.39</span><span class="hljs-meta">.2</span>)] on darwin
Type <span class="hljs-string">"help"</span>, <span class="hljs-string">"copyright"</span>, <span class="hljs-string">"credits"</span> <span class="hljs-keyword">or</span> <span class="hljs-string">"license"</span> for more information.
&gt;&gt;&gt;
</code></pre><p>(Note that the writer does not use Mac.)</p>
<p>If you want to exit, type <code>exit()</code> and then hit your <code>Return</code> button on your keyboard.</p>
<h2 id="2-an-ide-of-your-choice">2) An IDE of your choice</h2>
<p>You can write programs with notepad but we do not advise you to do so.</p>
<p>Some features you may want besides typing and saving:</p>
<ul>
<li>Syntax highlighting</li>
<li>Search-and-replace, in one or multiple documents, based on regular expressions or other patterns as needed</li>
<li>Quickly jump to a given line</li>
<li>View two parts of a large document separately</li>
<li>Select text in multiple places at once</li>
<li>View your project&#39;s files and directories</li>
<li>Format your code automatically</li>
<li>Check spelling</li>
</ul>
<p>A <strong>code or text editor</strong> is a tool that has one or more of these features. (Basically an amped up notepad.)</p>
<p>What we advise you to use is called an <strong>IDE</strong> (Integrated Development Environment) which provides more features like <em>automation, code linting, testing and debugging</em>. (Basically an amped up code editor.)</p>
<p>The IDE for Python of our choice is <strong>PyCharm</strong> but it is up to you what you want to use. PyCharm is a bit <em>resource intensive</em> <del>(or so I&#39;ve heard)</del> so if your computer has a small amount of RAM (less than 4 GB) it may cause lagging. </p>
<p>Another good option is <strong>Visual Studio Code</strong> which is a <strong>free and open-source</strong> IDE created by Microsoft. It can write in other languages besides Python and is lightweight and highly customizable.</p>
<b-card class="my-4" id="pycharm-community-edition-macos">
      <b-card-title>
        <div class="icon baseline">
          <svg viewBox="0 0 48 48">
            <image xlink:href="https://upload.wikimedia.org/wikipedia/commons/a/a1/PyCharm_Logo.svg" src="PyCharm_Logo.svg" width="50" height="50"/>
          </svg>&nbsp;<h2>PyCharm Community Edition</h2>
        </div>
      </b-card-title>
<p>Read through the installation. There is no harm to just going &quot;next, next, next, accept, install&quot; so do not worry.</p>
     <b-card class="card-outlined text-center mb-2">
        <p><a href="https://www.jetbrains.com/pycharm/download/"><font-awesome-icon icon="download"/> Download PyCharm</a></p>
        <small class="text-muted">for <strong>free and open-source</strong> download the <strong>Community Edition</strong></small>
     </b-card>
<div class="bd-callout bd-callout-info">
  <h5 class="text-info"><font-awesome-icon icon="info-circle"/> Pro Tip</h5>
  <p>You can also install <strong>Toolbox</strong> which will manage all JetBrains/IntelliJ (the company behind PyCharm) applications and their updates for you.</p>
  <p><a href="https://www.jetbrains.com/toolbox/app/"><font-awesome-icon icon="download"/> Download Toolbox</a></p>
  <p><strong>If you install Toolbox there is no need to download PyCharm CE separately.</strong></p>
</div>
</b-card>
<b-card id="visual-studio-code-macos" class="my-4">
      <b-card-title>
        <div class="icon baseline">
          <svg viewBox="0 0 48 48">
            <image xlink:href="https://dashboard.snapcraft.io/site_media/appmedia/2019/05/code_ozwVHSV.png" src="VSCode_Logo.svg" width="50" height="50"/>
          </svg>&nbsp;<h2>Visual Studio Code (for Mac)</h2>
        </div>
      </b-card-title>
      <p>Read through the installation. There is no harm to just going &quot;next, next, next, accept, install&quot; so do not worry.</p>
      <b-card class="card-outlined text-center mb-2">
        <p><a href="https://code.visualstudio.com/download"><font-awesome-icon icon="download"/> Download VS code</a></p>
      </b-card>
</b-card>
    </b-tab>
  </b-tabs>
  </no-ssr>
   <hr>
  <p>Another thing you could install is <a href="https://git-scm.com/downloads">Git</a> but you do not need this just yet.</p>
</div>
</div>
</template>

<script>
export default {
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/bstrap.docs.min.css' }
    ]
  },
  layout: 'home',
  asyncData(context) {
    const OS = context.$ua.os()
    return { OS }
  }
}
</script>

<style>
.nav-link {
  color: #ECA72C;
}

.nav-link:hover {
  color: rgb(182, 128, 35);
}

.nav-link.active {
  color: #FFFFFF;
  background-color: #ECA72C !important;
}

.icon {
    display: inline-flex;
    align-self: center;
}

.icon-1rem svg, .icon-1rem img {
    height: 1rem;
    width: 1rem;
    fill: currentColor;
}

.icon svg, .icon img {
    height: 2rem;
    width: 2rem;
    fill: currentColor;
}

.icon.baseline svg, .icon img {
    top: .125em;
    position: relative;
}
.card {
    box-shadow: none !important;
}
.bg-topic {
    background-color: #d8d8d8;
}
.badge a {
    color: #ffffff !important;
}
.card-outlined {
    border: 1px solid gainsboro;
    border-radius: 7px;
}
/* Start Overlay css
============================================================================================ */
.overlay {
  position: relative;
  background: #ECA72C; }

.overlay:after {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  content: "";
  z-index: -1; }

/* End Overlay css
============================================================================================ */

</style>
