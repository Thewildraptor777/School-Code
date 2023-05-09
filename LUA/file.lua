file={}
function file.read(pathname)
    -- Opens a file in read
    file = io.open(pathname, "r")

    -- sets the default input file as test.lua
    io.input(file)

    -- prints the first line of the file
    data= io.read()

    -- closes the open file
    io.close(file)
    return data
end
function file.append(pathname,data)
    -- Opens a file in append mode
    file = io.open(pathname, "a")

    -- sets the default output file as test.lua
    io.output(file)

    -- appends a word test to the last line of the file
    io.write(data)
    print("added data:".. data.." to ".. pathname)

    -- closes the open file
    io.close(file)
end
function file.write(pathname,data)
    os.remove(pathname)
    -- Opens a file in append mode
    file = io.open(pathname, "a")

    -- sets the default output file as test.lua
    io.output(file)

    -- appends a word test to the last line of the file
    io.write(data)
    print("wrote data:".. data.." to ".. pathname)

    -- closes the open file
    io.close(file)
end
return file