#!/usr/bin/env node

'use strict'

import mongoose from 'mongoose';
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const conf = require("./db-conf.json");

const Schema = mongoose.Schema,
	MovieSchema = new Schema({
		movie_id : "string",
		title : "string",
		release_year : "string",
		rating : "string",
		image : "string"
	},
	{
		collection : "movie"
	}),
	MovieModel = mongoose.model("Movie", MovieSchema)

mongoose.connect(`mongodb:\/\/${conf.mongo.host}/${conf.mongo.db}`)

export default MovieModel;