import {Response, Robot} from "hubot"
import {SlackAdapter} from "hubot-slack"

module.exports = async function test(robot: Robot<SlackAdapter>) {
  robot.respond(/test$/i, async (res: Response<SlackAdapter>) => {
    res.send("Hello from test.")
  })
}
