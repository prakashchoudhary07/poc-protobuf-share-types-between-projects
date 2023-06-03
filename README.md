# poc-protobuf-share-types-between-projects


command to generate 
GO types `protoc --go_out=paths=source_relative,M=github.com/example/user/hello:. sample.proto`

TS: `protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./types ../proto-bufs/simple.proto`

