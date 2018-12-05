/// <reference types="node" />
/// <reference types="mysql" />
import {Request,Response,RequestHandler} from "express";
import {NextHandleFunction} from "connect"
import { Pool } from 'mysql';

declare function dbs(str:Pool):NextHandleFunction;

export=dbs;
