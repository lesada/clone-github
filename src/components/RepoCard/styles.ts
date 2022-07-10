import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
`;

export const Topside = styled.div`
  > header {
    display: flex;
    align-items: center;
    > a {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 600;
      color: var(--link);
      text-decoration: none;
      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }
  > p {
    margin: 8px 0 16px;
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 0.1px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const Botside = styled.div`
  > ul {
    display: flex;
    align-items: center;
    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;
      > span {
        margin-left: 5px;
        font-size: 12px;
        color: var(--gray);
      }
    }
  }
  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--other-language);
    &.abap {
      background-color: #e8274b;
    }
    &.actionscript {
      background-color: #882b0f;
    }
    &.ada {
      background-color: #02f88c;
    }
    &.agda {
      background-color: #315665;
    }
    &.ags-script {
      background-color: #b9d9ff;
    }
    &.alloy {
      background-color: #64c800;
    }
    &.ampl {
      background-color: #e6efbb;
    }
    &.antlr {
      background-color: #9dc3ff;
    }
    &.api-blueprint {
      background-color: #2acca8;
    }
    &.apl {
      background-color: #5a8164;
    }
    &.arc {
      background-color: #aa2afe;
    }
    &.arduino {
      background-color: #bd79d1;
    }
    &.asp {
      background-color: #6a40fd;
    }
    &.aspectj {
      background-color: #a957b0;
    }
    &.assembly {
      background-color: #6e4c13;
    }
    &.ats {
      background-color: #1ac620;
    }
    &.autohotkey {
      background-color: #6594b9;
    }
    &.autoit {
      background-color: #1c3552;
    }
    &.blitzmax {
      background-color: #cd6400;
    }
    &.boo {
      background-color: #d4bec1;
    }
    &.brainfuck {
      background-color: #2f2530;
    }
    &.c-sharp {
      background-color: #178600;
    }
    &.c {
      background-color: #555555;
    }
    &.chapel {
      background-color: #8dc63f;
    }
    &.cirru {
      background-color: #ccccff;
    }
    &.clarion {
      background-color: #db901e;
    }
    &.clean {
      background-color: #3f85af;
    }
    &.click {
      background-color: #e4e6f3;
    }
    &.clojure {
      background-color: #db5855;
    }
    &.coffeescript {
      background-color: #244776;
    }
    &.coldfusion-cfc {
      background-color: #ed2cd6;
    }
    &.coldfusion {
      background-color: #ed2cd6;
    }
    &.common-lisp {
      background-color: #3fb68b;
    }
    &.component-pascal {
      background-color: #b0ce4e;
    }
    &.cpp {
      background-color: #f34b7d;
    }
    &.crystal {
      background-color: #776791;
    }
    &.css {
      background-color: #563d7c;
    }
    &.d {
      background-color: #ba595e;
    }
    &.dart {
      background-color: #00b4ab;
    }
    &.diff {
      background-color: #88dddd;
    }
    &.dm {
      background-color: #447265;
    }
    &.dogescript {
      background-color: #cca760;
    }
    &.dylan {
      background-color: #6c616e;
    }
    &.e {
      background-color: #ccce35;
    }
    &.eagle {
      background-color: #814c05;
    }
    &.ec {
      background-color: #913960;
    }
    &.ecl {
      background-color: #8a1267;
    }
    &.edn {
      background-color: #db5855;
    }
    &.eiffel {
      background-color: #946d57;
    }
    &.elixir {
      background-color: #6e4a7e;
    }
    &.elm {
      background-color: #60b5cc;
    }
    &.emacs-lisp {
      background-color: #c065db;
    }
    &.emberscript {
      background-color: #fff4f3;
    }
    &.erlang {
      background-color: #b83998;
    }
    &.f-sharp {
      background-color: #b845fc;
    }
    &.factor {
      background-color: #636746;
    }
    &.fancy {
      background-color: #7b9db4;
    }
    &.fantom {
      background-color: #dbded5;
    }
    &.flux {
      background-color: #88ccff;
    }
    &.forth {
      background-color: #341708;
    }
    &.fortran {
      background-color: #4d41b1;
    }
    &.freemarker {
      background-color: #0050b2;
    }
    &.frege {
      background-color: #00cafe;
    }
    &.game-maker-language {
      background-color: #8fb200;
    }
    &.glyph {
      background-color: #e4cc98;
    }
    &.gnuplot {
      background-color: #f0a9f0;
    }
    &.go {
      background-color: #375eab;
    }
    &.golo {
      background-color: #88562a;
    }
    &.gosu {
      background-color: #82937f;
    }
    &.grammatical-framework {
      background-color: #79aa7a;
    }
    &.groovy {
      background-color: #e69f56;
    }
    &.handlebars {
      background-color: #01a9d6;
    }
    &.harbour {
      background-color: #0e60e3;
    }
    &.haskell {
      background-color: #29b544;
    }
    &.haxe {
      background-color: #df7900;
    }
    &.html {
      background-color: #e44b23;
    }
    &.hy {
      background-color: #7790b2;
    }
    &.idl {
      background-color: #a3522f;
    }
    &.io {
      background-color: #a9188d;
    }
    &.ioke {
      background-color: #078193;
    }
    &.isabelle {
      background-color: #fefe00;
    }
    &.j {
      background-color: #9eedff;
    }
    &.java {
      background-color: #b07219;
    }
    &.javascript {
      background-color: #f1e05a;
    }
    &.jflex {
      background-color: #dbca00;
    }
    &.jsoniq {
      background-color: #40d47e;
    }
    &.julia {
      background-color: #a270ba;
    }
    &.jupyter-notebook {
      background-color: #da5b0b;
    }
    &.kotlin {
      background-color: #f18e33;
    }
    &.krl {
      background-color: #28431f;
    }
    &.lasso {
      background-color: #999999;
    }
    &.latte {
      background-color: #a8ff97;
    }
    &.lex {
      background-color: #dbca00;
    }
    &.lfe {
      background-color: #004200;
    }
    &.livescript {
      background-color: #499886;
    }
    &.lolcode {
      background-color: #cc9900;
    }
    &.lookml {
      background-color: #652b81;
    }
    &.lsl {
      background-color: #3d9970;
    }
    &.lua {
      background-color: #000080;
    }
    &.makefile {
      background-color: #427819;
    }
    &.mask {
      background-color: #f97732;
    }
    &.matlab {
      background-color: #bb92ac;
    }
    &.max {
      background-color: #c4a79c;
    }
    &.maxscript {
      background-color: #00a6a6;
    }
    &.mercury {
      background-color: #ff2b2b;
    }
    &.metal {
      background-color: #8f14e9;
    }
    &.mirah {
      background-color: #c7a938;
    }
    &.mtml {
      background-color: #b7e1f4;
    }
    &.ncl {
      background-color: #28431f;
    }
    &.nemerle {
      background-color: #3d3c6e;
    }
    &.nesc {
      background-color: #94b0c7;
    }
    &.netlinx {
      background-color: #0aa0ff;
    }
    &.netlinx-erb {
      background-color: #747faa;
    }
    &.netlogo {
      background-color: #ff6375;
    }
    &.newlisp {
      background-color: #87aed7;
    }
    &.nimrod {
      background-color: #37775b;
    }
    &.nit {
      background-color: #009917;
    }
    &.nix {
      background-color: #7e7eff;
    }
    &.nu {
      background-color: #c9df40;
    }
    &.objective-c {
      background-color: #438eff;
    }
    &.objective-cpp {
      background-color: #6866fb;
    }
    &.objective-j {
      background-color: #ff0c5a;
    }
    &.ocaml {
      background-color: #3be133;
    }
    &.omgrofl {
      background-color: #cabbff;
    }
    &.ooc {
      background-color: #b0b77e;
    }
    &.opal {
      background-color: #f7ede0;
    }
    &.oxygene {
      background-color: #cdd0e3;
    }
    &.oz {
      background-color: #fab738;
    }
    &.pan {
      background-color: #cc0000;
    }
    &.papyrus {
      background-color: #6600cc;
    }
    &.parrot {
      background-color: #f3ca0a;
    }
    &.pascal {
      background-color: #b0ce4e;
    }
    &.pawn {
      background-color: #dbb284;
    }
    &.perl {
      background-color: #0298c3;
    }
    &.perl6 {
      background-color: #0000fb;
    }
    &.php {
      background-color: #4f5d95;
    }
    &.piglatin {
      background-color: #fcd7de;
    }
    &.pike {
      background-color: #005390;
    }
    &.plsql {
      background-color: #dad8d8;
    }
    &.pogoscript {
      background-color: #d80074;
    }
    &.processing {
      background-color: #0096d8;
    }
    &.prolog {
      background-color: #74283c;
    }
    &.propeller-spin {
      background-color: #7fa2a7;
    }
    &.puppet {
      background-color: #302b6d;
    }
    &.pure data {
      background-color: #91de79;
    }
    &.purebasic {
      background-color: #5a6986;
    }
    &.purescript {
      background-color: #1d222d;
    }
    &.python {
      background-color: #3572a5;
    }
    &.qml {
      background-color: #44a51c;
    }
    &.r {
      background-color: #198ce7;
    }
    &.racket {
      background-color: #22228f;
    }
    &.ragel-in-ruby-host {
      background-color: #9d5200;
    }
    &.raml {
      background-color: #77d9fb;
    }
    &.rebol {
      background-color: #358a5b;
    }
    &.red {
      background-color: #ee0000;
    }
    &.ren-py {
      background-color: #ff7f7f;
    }
    &.rouge {
      background-color: #cc0088;
    }
    &.ruby {
      background-color: #701516;
    }
    &.rust {
      background-color: #dea584;
    }
    &.saltstack {
      background-color: #646464;
    }
    &.sas {
      background-color: #b34936;
    }
    &.scala {
      background-color: #dc322f;
    }
    &.scheme {
      background-color: #1e4aec;
    }
    &.self {
      background-color: #0579aa;
    }
    &.shell {
      background-color: #89e051;
    }
    &.shen {
      background-color: #120f14;
    }
    &.slash {
      background-color: #007eff;
    }
    &.slim {
      background-color: #ff8f77;
    }
    &.smalltalk {
      background-color: #596706;
    }
    &.sourcepawn {
      background-color: #5c7611;
    }
    &.sqf {
      background-color: #3f3f3f;
    }
    &.squirrel {
      background-color: #800000;
    }
    &.stan {
      background-color: #b2011d;
    }
    &.standard-ml {
      background-color: #dc566d;
    }
    &.supercollider {
      background-color: #46390b;
    }
    &.swift {
      background-color: #ffac45;
    }
    &.systemverilog {
      background-color: #dae1c2;
    }
    &.tcl {
      background-color: #e4cc98;
    }
    &.tex {
      background-color: #3d6117;
    }
    &.turing {
      background-color: #45f715;
    }
    &.typescript {
      background-color: #2b7489;
    }
    &.unified-parallel-c {
      background-color: #4e3617;
    }
    &.unity3d-asset {
      background-color: #ab69a1;
    }
    &.unrealscript {
      background-color: #a54c4d;
    }
    &.vala {
      background-color: #fbe5cd;
    }
    &.verilog {
      background-color: #b2b7f8;
    }
    &.vhdl {
      background-color: #adb2cb;
    }
    &.viml {
      background-color: #199f4b;
    }
    &.visual-basic {
      background-color: #945db7;
    }
    &.volt {
      background-color: #1f1f1f;
    }
    &.vue {
      background-color: #2c3e50;
    }
    &.web-ontology-language {
      background-color: #9cc9dd;
    }
    &.wisp {
      background-color: #7582d1;
    }
    &.x10 {
      background-color: #4b6bef;
    }
    &.xbase {
      background-color: #403a40;
    }
    &.xc {
      background-color: #99da07;
    }
    &.xquery {
      background-color: #5232e7;
    }
    &.zephir {
      background-color: #118f9e;
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
