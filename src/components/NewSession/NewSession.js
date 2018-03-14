import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Twemoji } from 'react-emoji-render'
import { AES, enc } from 'crypto-js'
import TechniqueInputs from './TechniqueInputs/TechniqueInputs'
import { hashSecret as secret } from '../../../config.js'

import styles from './new-session.scss'

export default class NewSession extends Component {
  state = {
    section: 'sentiment',
    sentiment: '',
    techniques: [],
    strengths: [],
    weaknesses: []
  }

  submitSession() {
    const storedHashed = localStorage.getItem('sessions')
    let stored = []

    if (storedHashed) {
      const bytes = AES.decrypt(storedHashed.toString(), secret)
      stored = JSON.parse(bytes.toString(enc.Utf8))
    }

    const data = {
      sentiment: this.state.sentiment,
      techniques: this.state.techniques,
      strengths: this.state.strengths,
      weaknesses: this.state.weaknesses,
      date: Date.now()
    }
    stored.push(data)

    const ciphertext = AES.encrypt(JSON.stringify(stored), secret)
    localStorage.setItem('sessions', ciphertext)
  }

  render() {
    const { section, techniques } = this.state

    return (
      <div className={'container' + ' ' + styles['new-session']}>

        {
          section === 'sentiment' &&
          <div>
            <h1>How did it go?</h1>
            <div className={styles['sentiment-wrapper']}>
              <Twemoji text=":muscle:" onClick={() => this.setState({ sentiment: 3, section: 'techniques' })} />
              <Twemoji text=":neutral_face:" onClick={() => this.setState({ sentiment: 2, section: 'techniques' })} />
              <Twemoji text=":poop:" onClick={() => this.setState({ sentiment: 1, section: 'techniques' })} />
            </div>
          </div>
        }

        {
          section === 'techniques' &&
          <TechniqueInputs
            title="What did you learn?"
            item="technique"
            previousSection="sentiment"
            nextSection="strengths"
            changeSection={section => this.setState({ section })}
            techniques={this.state.techniques}
            updateTechniques={techniques => this.setState({ techniques })} />
        }

        {
          section === 'strengths' &&
          <TechniqueInputs
            title="What were your strengths?"
            item="strength"
            previousSection="techniques"
            nextSection="weaknesses"
            changeSection={section => this.setState({ section })}
            techniques={this.state.strengths}
            updateTechniques={strengths => this.setState({ strengths })} />
        }

        {
          section === 'weaknesses' &&
          <TechniqueInputs
            title="What were your weaknesses?"
            item="weakness"
            previousSection="strengths"
            nextSection="submit"
            changeSection={section => this.setState({ section })}
            techniques={this.state.weaknesses}
            updateTechniques={weaknesses => this.setState({ weaknesses })}
            submitSession={() => this.submitSession()}/>
        }

      </div>
    )
  }
}
