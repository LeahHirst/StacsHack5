package(default_visibility = ["//visibility:public"])

load(
    "//tensorflow/lite:build_def.bzl",
    "tflite_copts",
)

filegroup(
    name = "assets",
    srcs = [
        "@tflite_smartreply//:model_files",
    ],
)

cc_binary(
    name = "test",
    deps = [
         ":tf_wrapper_lib",
    ],
    srcs = [
        "main.cc",
    ],
)

cc_binary(
    name = "tf_wrapper.so",
    deps = [
        ":tf_wrapper_lib",
    ],
    linkshared = True,
)

cc_library(
    name = "tf_wrapper_lib",
    srcs = [
        "tf_wrapper.cc",
    ],
    hdrs = [
         "tf_wrapper.h"
    ],
    copts = tflite_copts(),
    linkopts = [
        "-lm",
        "-ldl",
    ],
    deps = [
        "//tensorflow/lite:framework",
        "//tensorflow/lite/models/smartreply:predictor_lib",
    ],
    alwayslink = 1,
)